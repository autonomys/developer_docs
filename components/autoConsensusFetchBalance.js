import dynamic from "next/dynamic";

const Sandpack = dynamic(() => import("@codesandbox/sandpack-react").then((mod) => mod.Sandpack), {
  ssr: false, // Disable server-side rendering for Sandpack
});

export default function InteractiveCode() {
  const token = process.env.CODESANDBOX_TOKEN;
  const code = `
    import { account } from '@autonomys/auto-consensus';
    import { activate, parseTokenAmount} from '@autonomys/auto-utils';

    (async () => {
      const api = await activate({ networkId: 'mainnet'});
      const accountData = await account(api, 'sub564FwrR9yL7NVG2gdvSVj3oped2mBSYC65TjVGMp4tCkDp');

      console.log(\`Nonce: \${accountData.nonce}\`);
      console.log(\`Free Balance: \${accountData.data.free} AI3\`);
      console.log(\`Reserved Balance: \${accountData.data.reserved} AI3\`);

      await api.disconnect();
    })();
  `;

  return (
    <Sandpack
      template="node"
      files={{
        "/index.js": code,
      }}
      customSetup={{
        dependencies: {
          "@autonomys/auto-consensus": "^1.2.1",
          "@autonomys/auto-utils": "^1.2.1",
        },
      }}
      options={{
        showConsole: true,
        editorHeight: 400,
      }}
      codeSandboxOptions={{
        authToken: token,
      }}
    />
  );
}
