# CrazyKarenge
## Hyperthon speed coding

# **MemeCampus.org**  

## **Overview**  
MemeCampus.org is a decentralized platform empowering users to create, manage, and distribute fungible assets (tokens) for their projects in a user-friendly way. Whether you're a creator, developer, or enthusiast, MemeCampus.org simplifies asset creation with a seamless Web3 integration powered by blockchain technology.

---

## **Features**  
- **Fungible Asset Creation**: Effortlessly create tokens with customizable parameters such as name, symbol, max supply, minting fee, and decimals.  
- **Dynamic Image Upload**: Add unique icons or images for each asset to make your tokens visually distinctive.  
- **Decentralized and Transparent**: Built on blockchain technology, ensuring transparency, security, and immutability.  
- **Intuitive UI**: A modern and responsive design for a frictionless user experience.  
- **Web3 Wallet Integration**: Easily connect your wallet (e.g., MetaMask) to interact with the platform.  

---

## **Tech Stack**  
- **Frontend**:  
  - Framework: [Next.js](https://nextjs.org/)  
  - UI: Tailwind CSS, Shadcn/UI components  
  - State Management: React hooks  

- **Backend**:  
  - Blockchain: Smart contracts deployed on [Ethereum Testnet/Mainnet](#).  
  - Tools: Ethers.js for blockchain interactions  

- **Smart Contracts**:  
  - Developed in Solidity  
  - ABI provided for frontend interaction  

---

## **Installation**  

### **1. Clone the Repository**  
```bash  
git clone https://github.com/your-repo/MemeCampus.git  
cd MemeCampus  
```  

### **2. Install Dependencies**  
```bash  
npm install  
```  

### **3. Environment Setup**  
Create a `.env.local` file in the root directory and add the following:  
```env  
NEXT_PUBLIC_ALCHEMY_API_KEY=your-alchemy-api-key  
NEXT_PUBLIC_CONTRACT_ADDRESS=your-launchpad-contract-address  
NEXT_PUBLIC_NETWORK=ethereum-goerli # Or your desired network  
```  

### **4. Run the Development Server**  
```bash  
npm run dev  
```  
Open [http://localhost:3000](http://localhost:3000) to see the app in action.  

---

## **Smart Contract Details**  
The platform integrates with the `Launchpad` smart contract to enable fungible asset creation.  

### **Deployed Smart Contract Address**  
- **Launchpad Contract Address**: `0xf2959BAA209158028FF82aa80209C718eF001d13` 

### **Key Functions**  
- `createFA`: Allows users to mint new fungible assets with specified parameters.  
- `getFAInfo`: Retrieves details about an existing fungible asset.  

---

## **Usage Guide**  
1. **Connect Wallet**  
   - Click "Connect Wallet" to link your MetaMask or Web3-enabled wallet.  

2. **Fill the Asset Form**  
   - Enter the asset name, symbol, max supply, minting fee, and other required fields.  
   - Upload an image for your token if desired.  

3. **Submit and Confirm Transaction**  
   - Click "Create Asset" and confirm the transaction in your wallet.  
   - Wait for the transaction to be mined.  

4. **Verify Asset**  
   - Check the blockchain explorer for your token's details.  

---

## **File Structure**  
```plaintext  
MemeCampus/  
├── components/  
│   ├── ui/             # Reusable UI components  
├── constants/          # Contract ABI and static configurations  
├── pages/              # Next.js pages  
│   ├── index.js        # Main page  
│   ├── asset.js        # Asset creation page  
├── public/             # Static assets  
├── styles/             # Global styles  
├── .env.local          # Environment variables  
├── README.md           # Project documentation  
```  

---

## **Future Enhancements**  
- **Asset Explorer**: Enable users to view all created tokens on the platform.  
- **Multi-Chain Support**: Expand functionality to other blockchains like Polygon or Binance Smart Chain.  
- **User Dashboard**: Personalize the experience with user profiles and activity tracking.  
- **Custom Asset Metadata**: Allow creators to define advanced metadata for tokens.  

---

## **Contributing**  
We welcome contributions from the community!  
1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m "Add feature-name"`).  
4. Push the branch (`git push origin feature-name`).  
5. Open a Pull Request.  

---

## **License**  
This project is licensed under the MIT License.  

---

## **Contact**  
For queries or feedback:  
- **Email**: support@memecampus.org  

---  
Unleash your creativity with MemeCampus.org – where memes meet Web3!
