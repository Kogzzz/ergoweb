import { FormattedMessage } from "react-intl";
import Button from "../Button";

function FormattedMessageFixed(props: any) {
  return <FormattedMessage {...props} />;
}

export default function Mining() {
  let miningPoolsUrls = [
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="666 POOL"
          id="components.mining.miningPools.1"
        />
      ),
      url: "https://www.666pool.cn/pool2",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="HEROMINERS"
          id="components.mining.miningPools.2"
        />
      ),
      url: "https://ergo.herominers.com/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NANOPOOL"
          id="components.mining.miningPools.3"
        />
      ),
      url: "https://ergo.nanopool.org/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="WOOLYPOOLY"
          id="components.mining.miningPools.4"
        />
      ),
      url: "https://woolypooly.com/#/coin/erg",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="GETBLOK.IO"
          id="components.mining.miningPools.5"
        />
      ),
      url: "https://ergo.getblok.io/",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="2MINERS"
          id="components.mining.miningPools.6"
        />
      ),
      url: "https://2miners.com/erg-mining-pool",
    },
  ];
  let minersUrls = [
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NANOMINER"
          id="components.mining.miners.1"
        />
      ),
      url: "https://github.com/nanopool/nanominer/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="NBMINER"
          id="components.mining.miners.2"
        />
      ),
      url: "https://github.com/NebuTech/NBMiner/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="SRBMINER-MULTI"
          id="components.mining.miners.3"
        />
      ),
      url: "https://github.com/doktor83/SRBMiner-Multi/releases",
    },
    {
      text: (
        <FormattedMessageFixed
          defaultMessage="TEAM RED MINER"
          id="components.mining.miners.4"
        />
      ),
      url: "https://github.com/todxx/teamredminer/releases/",
    },
  ];

  let urlsComponent = (
    <div>
      <h2 className="mt-8 lg:mt-24 font-vinila-extended-light text-[40px] lg:text-[48px] mb-14">
        Mining Pools
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {miningPoolsUrls.map((link, i) => (
          <div className="ml-6 mb-10" key={i}>
            <Button
              text={link.text}
              url={link.url}
              newTab={true}
              underline={true}
              textColor="brand-orange"
              background={false}
              icon="ArrowRight"
              iconColor="orange"
            />
          </div>
        ))}
      </div>
      <h2 className="mt-8 lg:mt-12 font-vinila-extended-light text-[40px] lg:text-[48px]  mb-14">
        Miners
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {minersUrls.map((link, i) => (
          <div className="ml-6 mb-10" key={i}>
            <Button
              text={link.text}
              url={link.url}
              newTab={true}
              underline={true}
              textColor="brand-orange"
              background={false}
              icon="ArrowRight"
              iconColor="orange"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="Mining" className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 flex flex-col lg:flex-row relative z-10">
      <div className="lg:w-1/2">
        <h1 className="font-vinila-extended text-bold text-[48px] lg:text-[120px]">
          Mining
        </h1>
        <div className="hidden lg:block">{urlsComponent}</div>
      </div>
      <div className="lg:w-1/2">
        <p className="text-[#989898] dark:text-[#989898] mt-8 lg:mt-16 text-[14px] lg:text-[16px] max-w-sm">
          <FormattedMessage
            defaultMessage="Ergo mining is based on Autolykos v.2, a Proof-of-Work algorithm
                designed to be ASIC resistant. Miners have to perform memory-hard computations~(at least 2.5 GB memory is needed, but the current most efficient implementation utilizes around 4 GB of vRAM) that makes Ergo friendly for GPU mining.
                There was 0 ERG in existence at launch of mainnet as there was no ICO or premine. At the end of 8 years, the final Erg supply will be 97,739,925 Ergs. The Ergo block interval is 2 minutes"
            id={"components.mining.text.1"}
            values={{ breakingLine: <br /> }}
          />
        </p>
        <p className="text-[#989898] dark:text-[#989898] mt-8 text-bold text-[14px] lg:text-[24px]  max-w-lg">
          <FormattedMessage
            defaultMessage="The rest of the network verifies the solution which can be done
            efficiently, requiring less than a kilobyte of memory."
            id={"components.mining.text.2"}
            values={{ breakingLine: <br /> }}
          />
        </p>
        <div className="lg:hidden">{urlsComponent}</div>
      </div>
    </div>
  );
}
