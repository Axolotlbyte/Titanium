const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 justify-between bg-gradient-to-br from-purple-600 via-violet-500 to-blue-600 flex items-center h-20 w-full bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 ml-3 pb-1"
        viewBox="0 0 293 263"
        fill="none"
      >
        <rect
          x="10"
          y="15"
          width="268"
          height="243"
          rx="35"
          stroke="#fff"
          strokeWidth="15"
        />
        <path
          d="M261.411 109.945C261.411 112.737 259.147 115 256.355 115C253.563 115 251.3 112.737 251.3 109.945C251.3 107.153 253.563 104.89 256.355 104.89C259.147 104.89 261.411 107.153 261.411 109.945Z"
          fill="#fff"
        />
        <path
          d="M188.11 36.6483C188.11 39.4401 185.847 41.7033 183.055 41.7033C180.263 41.7033 178 39.4401 178 36.6483C178 33.8566 180.263 31.5934 183.055 31.5934C185.847 31.5934 188.11 33.8566 188.11 36.6483Z"
          fill="#fff"
        />
        <path
          d="M183.055 36.632L207.614 37.0554C231.182 37.4617 242.965 37.6649 250.16 45.1122C257.356 52.5595 257.152 64.3426 256.746 87.9087L256.366 109.94"
          stroke="#fff"
          strokeWidth="10"
        />
        <path
          d="M261 137C261 140.866 257.866 144 254 144C250.134 144 247 140.866 247 137C247 133.134 250.134 130 254 130C257.866 130 261 133.134 261 137Z"
          fill="#fff"
        />
        <path
          d="M121.565 199.87C119.361 199.87 117.505 199.116 115.997 197.608C114.489 196.1 113.735 194.244 113.735 192.04V92.338H78.2389C76.1509 92.338 74.4109 91.642 73.0189 90.25C71.6269 88.858 70.9309 87.118 70.9309 85.03C70.9309 82.942 71.6269 81.202 73.0189 79.81C74.4109 78.302 76.1509 77.548 78.2389 77.548H164.891C166.979 77.548 168.719 78.302 170.111 79.81C171.619 81.202 172.373 82.942 172.373 85.03C172.373 87.118 171.619 88.858 170.111 90.25C168.719 91.642 166.979 92.338 164.891 92.338H129.569V192.04C129.569 194.244 128.757 196.1 127.133 197.608C125.625 199.116 123.769 199.87 121.565 199.87ZM194.229 92.164C191.793 92.164 189.705 91.294 187.965 89.554C186.225 87.814 185.355 85.726 185.355 83.29V82.594C185.355 80.158 186.225 78.07 187.965 76.33C189.705 74.59 191.793 73.72 194.229 73.72H195.273C197.709 73.72 199.797 74.59 201.537 76.33C203.277 78.07 204.147 80.158 204.147 82.594V83.29C204.147 85.726 203.277 87.814 201.537 89.554C199.797 91.294 197.709 92.164 195.273 92.164H194.229ZM194.577 199.87C192.373 199.87 190.517 199.116 189.009 197.608C187.501 196.1 186.747 194.244 186.747 192.04V117.394C186.747 115.19 187.501 113.334 189.009 111.826C190.517 110.202 192.373 109.39 194.577 109.39C196.897 109.39 198.811 110.144 200.319 111.652C201.827 113.16 202.581 115.074 202.581 117.394V192.04C202.581 194.244 201.769 196.1 200.145 197.608C198.637 199.116 196.781 199.87 194.577 199.87Z"
          fill="#fff"
        />
        <path
          d="M46.0703 235H32.0977V232.061L37.1152 226.988C38.127 225.949 38.9382 225.083 39.5488 224.391C40.1686 223.689 40.6152 223.051 40.8887 222.477C41.1712 221.902 41.3125 221.287 41.3125 220.631C41.3125 219.838 41.0892 219.245 40.6426 218.854C40.2051 218.452 39.6172 218.252 38.8789 218.252C38.1042 218.252 37.3522 218.43 36.623 218.785C35.8939 219.141 35.1328 219.646 34.3398 220.303L32.043 217.582C32.6172 217.09 33.2233 216.625 33.8613 216.188C34.5085 215.75 35.2559 215.399 36.1035 215.135C36.9603 214.861 37.9857 214.725 39.1797 214.725C40.4922 214.725 41.6178 214.962 42.5566 215.436C43.5046 215.91 44.2337 216.557 44.7441 217.377C45.2546 218.188 45.5098 219.109 45.5098 220.139C45.5098 221.242 45.291 222.249 44.8535 223.16C44.416 224.072 43.778 224.974 42.9395 225.867C42.11 226.76 41.1074 227.749 39.9316 228.834L37.3613 231.254V231.445H46.0703V235ZM62.0938 235H48.1211V232.061L53.1387 226.988C54.1504 225.949 54.9616 225.083 55.5723 224.391C56.1921 223.689 56.6387 223.051 56.9121 222.477C57.1947 221.902 57.3359 221.287 57.3359 220.631C57.3359 219.838 57.1126 219.245 56.666 218.854C56.2285 218.452 55.6406 218.252 54.9023 218.252C54.1276 218.252 53.3757 218.43 52.6465 218.785C51.9173 219.141 51.1562 219.646 50.3633 220.303L48.0664 217.582C48.6406 217.09 49.2467 216.625 49.8848 216.188C50.5319 215.75 51.2793 215.399 52.127 215.135C52.9837 214.861 54.0091 214.725 55.2031 214.725C56.5156 214.725 57.6413 214.962 58.5801 215.436C59.528 215.91 60.2572 216.557 60.7676 217.377C61.278 218.188 61.5332 219.109 61.5332 220.139C61.5332 221.242 61.3145 222.249 60.877 223.16C60.4395 224.072 59.8014 224.974 58.9629 225.867C58.1335 226.76 57.1309 227.749 55.9551 228.834L53.3848 231.254V231.445H62.0938V235Z"
          fill="#fff"
        />
      </svg>
      <button className="w-20 h-auto font-medium py-1.5 bg-yellow-500 ring-2 ring-white mr-3 rounded-lg text-base text-white">
        Sign in
      </button>
    </header>
  );
};

export default Navbar;
