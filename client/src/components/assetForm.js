'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const AssetForm = ({ imageUri }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(imageUri)

  useEffect(() => {
    // Set the passed image URI as the selected image when the component mounts
    if (imageUri) {
      setSelectedImage(imageUri);
    }
  }, [imageUri]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Gather form data
      const formData = new FormData(e.target);
      const assetData = {
        name: formData.get("assetName"),
        symbol: formData.get("assetSymbol"),
        maxSupply: formData.get("maxSupply"),
        maxMintAmount: formData.get("maxMintAmount"),
        decimal: formData.get("decimal"),
        projectUrl: formData.get("projectUrl"),
        mintFee: formData.get("mintFee") || "0", // Default to 0 if not provided
        iconUri: selectedImage || "", // Use the image URI
      };
  
      // Interact with the blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(launchpadAddress, LaunchpadABI, signer);
  
      // Call the `createFA` function in the contract
      const tx = await contract.createFA(
        ethers.utils.parseUnits(assetData.maxSupply, assetData.decimal), // Convert max supply to token decimals
        assetData.name,
        assetData.symbol,
        parseInt(assetData.decimal), // Ensure it's an integer
        assetData.iconUri,
        assetData.projectUrl,
        ethers.utils.parseEther(assetData.mintFee), // Convert mint fee to Wei
        ethers.utils.parseUnits("0", assetData.decimal), // Default pre-mint amount
        ethers.utils.parseUnits(assetData.maxMintAmount, assetData.decimal) // Convert mint limit
      );
  
      console.log("Transaction submitted:", tx.hash);
  
      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);
  
      alert("Asset created successfully!");
    } catch (error) {
      console.error("Error creating asset:", error);
      alert("Failed to create asset. Check console for details.");
    }
  };
  

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-sm text-gray-600 mb-2">Asset Image</Label>
            <div className="text-xs text-gray-500 mb-2">
              Uploaded meme will be used as asset image
            </div>
            <div className="mt-1">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {selectedImage && (
                  <div className="mt-2">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="max-h-40 mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="assetName" className="flex items-center">
              Asset Name
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Name of your asset">
                ⓘ
              </span>
            </Label>
            <Input
              id="assetName"
              name="assetName"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="assetSymbol" className="flex items-center">
              Asset Symbol
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Symbol for your asset">
                ⓘ
              </span>
            </Label>
            <Input
              id="assetSymbol"
              name="assetSymbol"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="maxSupply" className="flex items-center">
              Max Supply
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Maximum supply of your asset">
                ⓘ
              </span>
            </Label>
            <Input
              id="maxSupply"
              name="maxSupply"
              type="number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="maxMintAmount" className="flex items-center">
              Max amount an address can mint
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Maximum amount that can be minted per address">
                ⓘ
              </span>
            </Label>
            <Input
              id="maxMintAmount"
              name="maxMintAmount"
              type="number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="decimal" className="flex items-center">
              Decimal
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Number of decimal places">
                ⓘ
              </span>
            </Label>
            <Input
              id="decimal"
              name="decimal"
              type="number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="projectUrl" className="flex items-center">
              Project URL
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="URL of your project">
                ⓘ
              </span>
            </Label>
            <Input
              id="projectUrl"
              name="projectUrl"
              type="url"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="mintFee" className="flex items-center">
              Mint fee per fungible asset in APT (optional)
              <span className="ml-1 text-gray-400 hover:text-gray-600 cursor-help" title="Optional minting fee in APT">
                ⓘ
              </span>
            </Label>
            <Input
              id="mintFee"
              name="mintFee"
              type="number"
              step="0.000000000000000001"
              className="mt-1"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Create Asset
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AssetForm;