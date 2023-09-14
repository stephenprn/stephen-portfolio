import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = ({ width = 32, height = 32, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height} {...props}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path
          fill={color}
          d="M39.6300453,47.4502344 L83.3341502,14.2422266 L50.0831728,53.9094141 C50.074572,53.9195703 50.0677305,53.9307031 50.0595206,53.9408594 C50.0366502,53.9695703 50.0151481,53.9988672 49.994037,54.02875 C49.9735123,54.0572656 49.9529877,54.0859766 49.9340267,54.1156641 C49.9148704,54.1457422 49.8972778,54.1766016 49.8798807,54.2080469 C49.8622881,54.2392969 49.8446955,54.2705469 49.8288621,54.3027734 C49.8136152,54.3340234 49.7997366,54.3660547 49.7860535,54.3982812 C49.7715885,54.4322656 49.7573189,54.4660547 49.7448086,54.500625 C49.7405082,54.5127344 49.734644,54.5240625 49.7305391,54.5361719 L45.8844074,65.8680078 L39.6300453,47.4502344 Z M97.9096132,2.65023437 C97.9174321,2.62132812 97.9244691,2.59222656 97.9307243,2.56332031 C97.9365885,2.53714844 97.9416708,2.51097656 97.9461667,2.48441406 C97.9518354,2.45316406 97.9565267,2.42191406 97.9606317,2.39046875 C97.9637593,2.36546875 97.9664959,2.34027344 97.9686461,2.31527344 C97.9713827,2.28304687 97.9733374,2.25101562 97.9745103,2.21898437 C97.9754877,2.19339844 97.9758786,2.16800781 97.9758786,2.14261719 C97.9758786,2.11136719 97.9749012,2.08050781 97.9733374,2.04945312 C97.9719691,2.0225 97.9704053,1.99554687 97.9678642,1.96878906 C97.9651276,1.9396875 97.9616091,1.91097656 97.9576996,1.88207031 C97.9537901,1.85355469 97.9496852,1.82503906 97.9444074,1.79671875 C97.9393251,1.769375 97.9334609,1.74261719 97.9272058,1.71546875 C97.9205597,1.68636719 97.9141091,1.65765625 97.9060947,1.62894531 C97.8986667,1.60160156 97.8896749,1.57484375 97.8810741,1.54789062 C97.8722778,1.52054687 97.863677,1.49300781 97.8535123,1.46605469 C97.8421749,1.43539062 97.8290782,1.40570312 97.816177,1.37582031 C97.8064033,1.35296875 97.797607,1.3303125 97.786856,1.30804687 C97.7667222,1.26546875 97.7442428,1.22386719 97.720786,1.18285156 C97.7158992,1.1740625 97.7119897,1.16527344 97.7069074,1.15667969 L97.7055391,1.15433594 C97.6754362,1.10335937 97.6429877,1.05394531 97.6083889,1.00570312 C97.5997881,0.99359375 97.5900144,0.98265625 97.5810226,0.970546875 C97.5552202,0.9365625 97.5290267,0.902578125 97.5008786,0.869960937 C97.4838724,0.850234375 97.4654979,0.831875 97.4477099,0.813125 C97.4262078,0.790273437 97.4050967,0.766835937 97.3824218,0.744960937 C97.3603333,0.723671875 97.3372675,0.70375 97.3143971,0.683632812 C97.2942634,0.666054687 97.2745206,0.647890625 97.2536049,0.630898437 C97.2274115,0.609804687 97.2004362,0.590078125 97.1732654,0.570546875 C97.1537181,0.556289062 97.1349527,0.541835937 97.1148189,0.528359375 C97.0853025,0.5084375 97.0550041,0.49046875 97.0245103,0.472304687 C97.0096543,0.463515625 96.9955802,0.453359375 96.9803333,0.444765625 C96.975251,0.44203125 96.9701687,0.439882812 96.9652819,0.437148437 C96.9361564,0.421132812 96.906249,0.406875 96.8763416,0.392226562 C96.8528848,0.380898437 96.8296235,0.368984375 96.8059712,0.358632812 C96.7799733,0.347304687 96.7537798,0.337539062 96.7275864,0.327382812 C96.6990473,0.316445312 96.6705082,0.305117187 96.6415782,0.295351562 C96.6183169,0.287539062 96.5946646,0.28109375 96.5710123,0.274257812 C96.5391502,0.264882812 96.5070926,0.255507812 96.4748395,0.247890625 C96.4517737,0.242421875 96.4285123,0.237929687 96.405251,0.2334375 C96.372607,0.226992187 96.339963,0.220546875 96.3071235,0.215664062 C96.2822984,0.212148437 96.2572778,0.209609375 96.2322572,0.206679687 C96.201177,0.203554687 96.1700967,0.200234375 96.138821,0.19828125 C96.1116502,0.196914062 96.084284,0.196328125 96.0569177,0.195742187 C96.0279877,0.195351562 95.9988621,0.194960937 95.9697366,0.195742187 C95.9410021,0.196523437 95.9122675,0.19828125 95.8835329,0.200234375 C95.8553848,0.202382812 95.8272366,0.204921875 95.799284,0.207851562 C95.7705494,0.211367187 95.7422058,0.215273437 95.7134712,0.219960937 C95.6845412,0.224453125 95.6558066,0.229726562 95.6268765,0.23578125 C95.6002922,0.24125 95.5739033,0.247109375 95.5473189,0.25375 C95.5152613,0.261953125 95.4837901,0.2709375 95.4521235,0.280507812 C95.4294486,0.287539062 95.4065782,0.294570312 95.3839033,0.302382812 C95.3475453,0.314882812 95.3117737,0.328945312 95.2760021,0.34359375 C95.2629053,0.349257812 95.2496132,0.353164062 95.2365165,0.359023437 L17.6768354,34.3805078 C16.9981523,34.6781641 16.5464136,35.3338281 16.510251,36.0734766 C16.4740885,36.813125 16.8595617,37.5096094 17.5059918,37.8721094 L35.7166708,48.0834375 L44.0217428,72.5404687 C44.1063827,72.8072656 44.2496646,73.0592187 44.4510021,73.2758203 C44.4961564,73.3244531 44.5438519,73.3707422 44.5935021,73.4144922 C44.9633374,73.7398828 45.4242634,73.9012109 45.8844074,73.9012109 C45.8933992,73.9012109 45.9025864,73.9012109 45.9117737,73.9010156 C46.0102922,73.8996484 46.1074424,73.8908594 46.2026379,73.8752344 C46.5802922,73.8133203 46.9428951,73.6404687 47.2370823,73.3582422 C47.2656214,73.3310937 47.2931831,73.3029687 47.319963,73.2740625 L58.5839136,61.3201562 L72.8470103,69.3004297 C73.1423704,69.4656641 73.4715473,69.5492578 73.8020926,69.5492578 C74.0390062,69.5492578 74.2765062,69.5064844 74.5028642,69.419375 C75.045107,69.2115625 75.4665473,68.7732812 75.6532243,68.2236719 L97.8734506,2.77484375 C97.8779465,2.76136719 97.8808786,2.74808594 97.885179,2.73480469 C97.8937798,2.70667969 97.9019897,2.67875 97.9096132,2.65023437 L97.9096132,2.65023437 Z M24.5356595,83.7445898 C24.4701759,83.9598242 24.4009784,84.1717383 24.3282623,84.3801367 C21.5928097,84.6359961 18.908571,84.0774023 16.6807623,82.0805273 C12.7507726,78.5578711 12.9460504,75.2541602 14.4392706,73.3369727 C15.3447027,72.1742773 16.8236533,71.3830664 18.5031595,71.3830664 C19.5870586,71.3830664 20.7548158,71.7127539 21.9051759,72.4848242 C24.9158549,74.5049414 25.9729743,79.0299414 24.5356595,83.7445898 M39.7507109,76.8488867 C39.6643117,76.9242773 34.5522953,81.3125586 28.6673776,83.3807227 C29.9348261,77.5430273 28.1829949,71.9916602 24.0847027,69.2418555 C21.9231595,67.7912695 19.4126965,67.2080664 17.0167809,67.6004492 C14.7526142,67.9707617 12.7415854,69.1563086 11.3537253,70.9379492 C9.88357099,72.8258398 9.27819033,75.1918555 9.64939403,77.6004492 C10.0503097,80.2004492 11.578715,82.755332 14.0700216,84.9881445 C16.3816883,87.0602148 19.1566265,88.1752539 22.3080463,88.3289648 C18.3243014,93.9674414 11.143787,96.0926367 4.95471296,96.0926367 C3.8751142,96.0926367 2.99998045,96.9670508 2.99998045,98.0457617 C2.99998045,99.1242773 3.8751142,99.9988867 4.95471296,99.9988867 C16.8625525,99.9988867 23.9281286,94.1816992 27.0719249,87.8908789 C28.8524907,87.5000586 30.7206286,86.8582617 32.6630463,85.9654883 C38.0586944,83.4852148 42.1493632,79.9420508 42.3207932,79.7926367 C43.1337665,79.083457 43.2172335,77.8508398 42.5082521,77.0381445 C41.7992706,76.2258398 40.5646615,76.1410742 39.7507109,76.8488867"
        />
      </g>
    </svg>
  );
};
export { SvgComponent as MailIcon };
