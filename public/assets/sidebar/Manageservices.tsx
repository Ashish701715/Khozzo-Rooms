import React, { FC } from 'react';

interface HomeUpProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const Manageservices: FC<HomeUpProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_18_1932)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.86925 8.55274C2.92768 9.30361 3.12234 10.0458 3.45305 10.7394L2.30865 11.4001C1.86476 10.5014 1.61136 9.53223 1.54853 8.55278H2.86925V8.55274ZM9.40901 3.32691C10.3774 3.32691 11.1624 4.11195 11.1624 5.08032C11.1624 6.0487 10.3774 6.83374 9.40901 6.83374C8.44063 6.83374 7.65559 6.0487 7.65559 5.08032C7.65559 4.11195 8.44063 3.32691 9.40901 3.32691ZM6.33326 10.2801H12.4848C12.6884 10.2801 12.838 10.0935 12.7936 9.89476C12.4477 8.3443 11.0637 7.1853 9.40901 7.1853C7.75428 7.1853 6.37035 8.3443 6.02442 9.8948C5.98005 10.0935 6.12964 10.2801 6.33326 10.2801ZM8.89749 13.4403C9.19748 13.4769 9.44389 13.3866 9.52738 13.075C9.60244 12.7948 9.42536 12.532 9.16144 12.4396C8.30964 12.2834 7.48438 11.9851 6.83536 11.7504C5.90408 11.4137 5.66094 11.3346 4.7423 11.8664L3.08996 12.8231L4.46211 15.2476L4.57056 15.185C4.63736 15.1466 4.71337 15.1388 4.78238 15.1573L8.50803 16.1547C9.0488 16.2996 9.37685 16.2414 9.83328 15.9604L14.9496 12.8099C15.109 12.7118 15.1874 12.4839 15.1643 12.2612C15.1454 12.0788 15.0568 11.914 14.8891 11.829C14.623 11.6942 14.1607 11.7345 13.4458 12.1509L10.6155 13.7994C10.3882 13.9318 10.1542 14.0159 9.91133 14.0567C9.20961 14.1745 8.1527 13.8438 7.52425 13.6643C7.32228 13.6066 7.11728 13.5481 6.91703 13.4944C6.76716 13.4544 6.67815 13.3004 6.71819 13.1505C6.75823 13.0007 6.91222 12.9117 7.06205 12.9517C7.67286 13.1153 8.27846 13.3121 8.89749 13.4403ZM2.23767 12.4592L4.47441 16.4114C4.58255 16.6025 4.5147 16.8473 4.32359 16.9554L3.56278 17.386C3.37167 17.4942 3.12684 17.4263 3.0187 17.2352L0.781951 13.283C0.67381 13.0919 0.741662 12.8471 0.932771 12.7389L1.69359 12.3083C1.88466 12.2002 2.12953 12.2681 2.23767 12.4592ZM1.72477 13.0516C1.57634 13.0733 1.47358 13.2112 1.49531 13.3597C1.517 13.5081 1.65495 13.6108 1.80338 13.5892C1.95181 13.5675 2.05457 13.4295 2.03285 13.2811C2.01112 13.1326 1.8732 13.0299 1.72477 13.0516ZM1.54853 7.5819C1.61382 6.56557 1.88104 5.60348 2.31069 4.73576L3.46195 5.40042C3.14536 6.0693 2.94178 6.80495 2.87442 7.5819H1.54853ZM2.79669 3.89535C3.34699 3.07157 4.0556 2.36215 4.87948 1.81121L5.53736 2.95066C4.91218 3.38266 4.37242 3.92797 3.94401 4.55773L2.79669 3.89535ZM5.71982 1.325C6.58677 0.89543 7.54861 0.627715 8.56656 0.562676V1.88297C7.78325 1.94252 7.04588 2.14506 6.37745 2.46403L5.71982 1.325ZM9.53737 0.5625V1.88318C12.737 2.13001 15.2564 4.80442 15.2564 8.06734C15.2564 8.32855 15.2402 8.58596 15.2088 8.83867H14.7752C14.6484 8.83867 14.5776 8.98446 14.6561 9.08413L15.8272 10.5716C15.8879 10.6487 16.0048 10.6487 16.0655 10.5716L17.2366 9.08413C17.3151 8.98446 17.2443 8.8387 17.1175 8.83867H16.5353C16.5611 8.58509 16.5744 8.32778 16.5744 8.06734C16.5743 4.07633 13.4654 0.811969 9.53737 0.5625Z" fill="#A1AEC0" />
            </g>
            <defs>
                <clipPath id="clip0_18_1932">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Manageservices;
