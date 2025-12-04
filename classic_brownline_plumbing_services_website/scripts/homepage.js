const fs = require("fs");

// Vercel sets this environment variable automatically
const isVercel = !!process.env.VERCEL;

if (!isVercel) {
	// Not running in Vercel environment
	console.log("⚪ Not Vercel environment. homepage will stay.");
	process.exit(0);
}

// Running in Vercel environment
console.log("🟡 Detected Vercel. Removing homepage...");

// Read package.json
const packageJsonPath = "./package.json";
const packageJson = JSON.parse(
	fs.readFileSync(
		packageJsonPath,
		"utf8"
	)
);

// Remove homepage field
delete packageJson.homepage;

// Write back to package.json
fs.writeFileSync(
	packageJsonPath,
	JSON.stringify(
		packageJson, null, 2
	)
);

// Log success message
console.log("🟢 homepage removed for Vercel build.");
