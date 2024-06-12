export default function Home() {
  return (
    <div>
      <div style={{ fontFamily: '"Courier New", Courier, monospace' }} className="min-h-[90vh] flex flex-row justify-center items-center">
        <div>
          <h1 className="text-[2rem] my-8">Welcome to Starknet Devs!</h1>
          <div className="text-[1.2rem] my-8 leading-[1]">
            Its an Whitelist collection for developers in Starknet.
          </div>
          <div className="text-[1.2rem] my-8 leading-[1]">
            1/10 have already joined the Whitelist.
          </div>
          <button className="rounded-[4px] bg-blue-800 border-none text-white text-[15px] p-[20px] w-[200px] cursor-pointer mb-[2%]">
            Connect your wallet
          </button>
        </div>
      </div>
    </div>
  );
}
