export default function Navigation() {
  return (
    <>
      <div
        className="w-[390px] h-[56px] bg-[#29292C] text-[#797979]
                flex items-center justify-between"
        style={
          ({ boxShadow: "0px -5px 13px 0px rgba(0, 0, 0, 0.10)" },
          { backdropFilter: "blur(36px)" })
        }
      >
        {/* home */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M8.35797 21.6485V18.2751C8.35795 17.4171 9.06081 16.7199 9.93165 16.7142H13.1215C13.9965 16.7142 14.7058 17.413 14.7058 18.2751V21.659C14.7056 22.3875 15.2958 22.9829 16.0349 23H18.1615C20.2815 23 22 21.3067 22 19.218V9.62162C21.9887 8.79991 21.5971 8.02828 20.9367 7.52634L13.6638 1.75383C12.3897 0.748723 10.5784 0.748723 9.3043 1.75383L2.06329 7.53681C1.40039 8.03672 1.00816 8.80963 1 9.6321V19.218C1 21.3067 2.71855 23 4.83848 23H6.96506C7.7226 23 8.33671 22.3949 8.33671 21.6485"
            stroke="#797979"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* play */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 12C1 3.74933 1.08835 1 12 1C22.9117 1 23 3.74933 23 12C23 20.2507 23.0348 23 12 23C0.9652 23 1 20.2507 1 12Z"
            stroke="#797979"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0672 12.0054C17.0672 12.2835 16.9698 12.5625 16.7751 12.786C16.7386 12.8298 16.5682 13.0105 16.4343 13.1282L16.3612 13.1923C15.3388 14.1664 12.7948 15.6313 11.5046 16.1007C11.5046 16.1114 10.7377 16.3905 10.3726 16.4001H10.3239C9.76395 16.4001 9.24055 16.1232 8.97276 15.6741C8.82669 15.4271 8.6928 14.7107 8.68063 14.701C8.57108 14.0584 8.49805 13.0747 8.49805 11.9948C8.49805 10.8624 8.57108 9.83485 8.70497 9.20399C8.70497 9.19329 8.83887 8.61589 8.92407 8.42343C9.05797 8.14649 9.30141 7.91018 9.60571 7.76049C9.84915 7.65463 10.1048 7.6001 10.3726 7.6001C10.6525 7.61186 11.1759 7.77118 11.3828 7.84603C12.7461 8.3165 15.351 9.85623 16.3491 10.7972C16.5195 10.9469 16.7021 11.1297 16.7508 11.1714C16.9577 11.4067 17.0672 11.6954 17.0672 12.0054Z"
            fill="#797979"
          />
        </svg>

        {/* add */}

        <div className="w-[24px] h-[24px] border-[1.5px] border-solid border-[#797979] rounded flex items-center justify-center text-[#782DB2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11 6C11 6.08464 10.9664 6.16582 10.9065 6.22567C10.8467 6.28552 10.7655 6.31915 10.6809 6.31915L6.31915 6.31915L6.31915 10.6809C6.31915 10.7655 6.28552 10.8467 6.22567 10.9065C6.16582 10.9664 6.08464 11 6 11C5.91536 11 5.83418 10.9664 5.77433 10.9065C5.71448 10.8467 5.68085 10.7655 5.68085 10.6809L5.68085 6.31915H1.31915C1.23451 6.31915 1.15333 6.28552 1.09348 6.22567C1.03362 6.16582 1 6.08464 1 6C1 5.91536 1.03362 5.83418 1.09348 5.77433C1.15333 5.71448 1.23451 5.68085 1.31915 5.68085H5.68085V1.31915C5.68085 1.23451 5.71448 1.15333 5.77433 1.09348C5.83418 1.03362 5.91536 1 6 1C6.08464 1 6.16582 1.03362 6.22567 1.09348C6.28552 1.15333 6.31915 1.23451 6.31915 1.31915V5.68085L10.6809 5.68085C10.7655 5.68085 10.8467 5.71448 10.9065 5.77433C10.9664 5.83418 11 5.91536 11 6Z"
              fill="#5A5A5A"
              stroke="#782DB2"
            />
          </svg>
        </div>

        {/* cart */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M15.5 6.35643H17.2985C18.3602 6.35643 19.2368 7.18602 19.2954 8.24611L19.9417 19.9448C19.9734 20.5179 19.5172 21 18.9432 21H3.05677C2.48281 21 2.02663 20.5179 2.05829 19.9448L2.70459 8.24612C2.76316 7.18603 3.63984 6.35644 4.70155 6.35644L9.15449 6.35644L15.5 6.35643ZM15.5 6.35643C15.5 4.5 15.2975 1 11 1C6.70249 1 6.44944 4.5 6.44944 6.35644V9.5M15.5 6.35643V9.5"
            stroke="#797979"
            strokeWidth="1.5"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle
              cx="6"
              cy="6"
              r="5.75"
              fill="#782DB2"
              stroke="#D3D3D3"
              strokeWidth="0.5"
            />

            <div className="w-[4px] h-[7px] font-normal flex items-center text-[#E1E1E1]">
              5
            </div>
          </svg>
        </svg>

        {/* profile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M2.20001 17.5999C2.20001 16.433 2.66358 15.3138 3.48874 14.4887C4.3139 13.6635 5.43306 13.2 6.60001 13.2H15.4C16.567 13.2 17.6861 13.6635 18.5113 14.4887C19.3364 15.3138 19.8 16.433 19.8 17.5999C19.8 18.1834 19.5682 18.743 19.1556 19.1556C18.7431 19.5682 18.1835 19.7999 17.6 19.7999H4.40001C3.81654 19.7999 3.25696 19.5682 2.84438 19.1556C2.4318 18.743 2.20001 18.1834 2.20001 17.5999Z"
            stroke="#797979"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M11 8.79995C12.8226 8.79995 14.3 7.32249 14.3 5.49995C14.3 3.67741 12.8226 2.19995 11 2.19995C9.17747 2.19995 7.70001 3.67741 7.70001 5.49995C7.70001 7.32249 9.17747 8.79995 11 8.79995Z"
            stroke="#797979"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}
