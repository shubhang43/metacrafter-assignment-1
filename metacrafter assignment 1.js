// Create a variable to hold your digitalAssets
let assetCount = 0;

// This function will take in some values as parameters, create a
// digitalAsset object using the parameters passed to it for its metadata,
// and store it in the variable above.
function createDigitalAsset(title, details, content) {
  // Create an object to hold the digital asset metadata
  const digitalAsset = {
    title: title,
    details: details,
    content: content
  };

  // Increment the asset count
  assetCount++;

  // Return the created digital asset object
  return digitalAsset;
}

// Create an array to hold the created digital assets
const digitalAssets = [];

// This function will loop through the array of digital assets
// and print their metadata with console.log()
function listDigitalAssets() {
  for (let i = 0; i < digitalAssets.length; i++) {
    const asset = digitalAssets[i];
    console.log("Title: " + asset.title);
    console.log("Details: " + asset.details);
    console.log("Content: " + asset.content);
    console.log("------------------");
  }
}

// This function will return the total number of created digital assets
function getTotalAssets() {
  return assetCount;
}

// Call your functions below this line

// Create some digital assets and store them in the digitalAssets array
const asset1 = createDigitalAsset("Asset 1", "First digital asset", "Content 1");
digitalAssets.push(asset1);

const asset2 = createDigitalAsset("Asset 2", "Second digital asset", "Content 2");
digitalAssets.push(asset2);

const asset3 = createDigitalAsset("Asset 3", "Third digital asset", "Content 3");
digitalAssets.push(asset3);

// List all the created digital assets
listDigitalAssets();

// Print the total number of created digital assets
console.log("Total Assets: " + getTotalAssets());
