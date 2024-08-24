"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"]

const asides = [
    {
        name: "Dashboard",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M2.45121 14.558C1.93067 14.558 1.48506 14.3726 1.11437 14.002C0.743689 13.6313 0.55835 13.1857 0.55835 12.6651V2.45084C0.55835 1.9303 0.743689 1.4847 1.11437 1.11402C1.48506 0.743329 1.93067 0.557983 2.45121 0.557983H6.61192V14.558H2.45121ZM8.50478 14.558V7.55798H14.5583V12.6651C14.5583 13.1857 14.373 13.6313 14.0023 14.002C13.6316 14.3726 13.186 14.558 12.6655 14.558H8.50478ZM8.50478 5.66513V0.557983H12.6655C13.186 0.557983 13.6316 0.743329 14.0023 1.11402C14.373 1.4847 14.5583 1.9303 14.5583 2.45084V5.66513H8.50478Z" />
        </svg>
        )
    },
    {
        name: "Device",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M2.40295 6.89215V4.99131H8.71519V6.89215H2.40295ZM1.90084 17.1495C1.37811 17.1495 0.930618 16.9634 0.558364 16.5912C0.186121 16.2189 0 15.7714 0 15.2487V2.05038C0 1.52765 0.186121 1.08016 0.558364 0.707918C0.930618 0.335663 1.37811 0.149536 1.90084 0.149536H9.2173C9.74003 0.149536 10.1875 0.335663 10.5598 0.707918C10.932 1.08016 11.1181 1.52765 11.1181 2.05038V15.2487C11.1181 15.7714 10.932 16.2189 10.5598 16.5912C10.1875 16.9634 9.74003 17.1495 9.2173 17.1495H1.90084ZM1.90084 12.8099H9.2173V4.4892H1.90084V12.8099Z" />
        </svg>
        )
    },
    {
        name: "Contacts",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M2.51468 17.5132V15.6361H14.4855V17.5132H2.51468ZM2.51468 1.36317V-0.513916H14.4855V1.36317H2.51468ZM8.5001 9.57983C9.16121 9.57983 9.72492 9.34963 10.1912 8.88921C10.6576 8.42879 10.8907 7.86213 10.8907 7.18921C10.8907 6.5281 10.6576 5.96438 10.1912 5.49806C9.72492 5.03174 9.16121 4.79858 8.5001 4.79858C7.82718 4.79858 7.26051 5.03174 6.8001 5.49806C6.33968 5.96438 6.10947 6.5281 6.10947 7.18921C6.10947 7.86213 6.33968 8.42879 6.8001 8.88921C7.26051 9.34963 7.82718 9.57983 8.5001 9.57983ZM2.72718 14.6975C2.20774 14.6975 1.76503 14.5146 1.39906 14.1486C1.03308 13.7826 0.850098 13.3399 0.850098 12.8205V4.1965C0.850098 3.66525 1.03308 3.21664 1.39906 2.85067C1.76503 2.4847 2.20774 2.30171 2.72718 2.30171H14.2553C14.7866 2.30171 15.2352 2.4847 15.6011 2.85067C15.9671 3.21664 16.1501 3.66525 16.1501 4.1965V12.8205C16.1501 13.3399 15.9671 13.7826 15.6011 14.1486C15.2352 14.5146 14.7866 14.6975 14.2553 14.6975H2.72718ZM3.43551 12.8205H13.5647C13.0216 12.0413 12.3133 11.4126 11.4397 10.9345C10.5661 10.4564 9.58621 10.2173 8.5001 10.2173C7.41399 10.2173 6.43413 10.4564 5.56051 10.9345C4.6869 11.4126 3.97857 12.0413 3.43551 12.8205Z" />
        </svg>

        ),
        subMenu: [
            {
                name: "Contacts", path: "", icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M2.51468 17.5132V15.6361H14.4855V17.5132H2.51468ZM2.51468 1.36317V-0.513916H14.4855V1.36317H2.51468ZM8.5001 9.57983C9.16121 9.57983 9.72492 9.34963 10.1912 8.88921C10.6576 8.42879 10.8907 7.86213 10.8907 7.18921C10.8907 6.5281 10.6576 5.96438 10.1912 5.49806C9.72492 5.03174 9.16121 4.79858 8.5001 4.79858C7.82718 4.79858 7.26051 5.03174 6.8001 5.49806C6.33968 5.96438 6.10947 6.5281 6.10947 7.18921C6.10947 7.86213 6.33968 8.42879 6.8001 8.88921C7.26051 9.34963 7.82718 9.57983 8.5001 9.57983ZM2.72718 14.6975C2.20774 14.6975 1.76503 14.5146 1.39906 14.1486C1.03308 13.7826 0.850098 13.3399 0.850098 12.8205V4.1965C0.850098 3.66525 1.03308 3.21664 1.39906 2.85067C1.76503 2.4847 2.20774 2.30171 2.72718 2.30171H14.2553C14.7866 2.30171 15.2352 2.4847 15.6011 2.85067C15.9671 3.21664 16.1501 3.66525 16.1501 4.1965V12.8205C16.1501 13.3399 15.9671 13.7826 15.6011 14.1486C15.2352 14.5146 14.7866 14.6975 14.2553 14.6975H2.72718ZM3.43551 12.8205H13.5647C13.0216 12.0413 12.3133 11.4126 11.4397 10.9345C10.5661 10.4564 9.58621 10.2173 8.5001 10.2173C7.41399 10.2173 6.43413 10.4564 5.56051 10.9345C4.6869 11.4126 3.97857 12.0413 3.43551 12.8205Z" />
                </svg>
                )
            },
            {
                name: "Groupd", path: "", icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M0.478027 13.9809V10.9173C0.478027 10.4569 0.640354 10.0673 0.965007 9.74856C1.28966 9.42981 1.67629 9.27044 2.1249 9.27044H4.44469C4.62178 9.27044 4.79001 9.31176 4.94938 9.3944C5.10876 9.47704 5.24157 9.60099 5.34782 9.76627C5.71379 10.2857 6.17126 10.6871 6.72021 10.9704C7.26917 11.2538 7.8624 11.3954 8.4999 11.3954C9.1374 11.3954 9.73358 11.2538 10.2884 10.9704C10.8433 10.6871 11.3037 10.2857 11.6697 9.76627C11.7759 9.60099 11.9088 9.47704 12.0681 9.3944C12.2275 9.31176 12.3898 9.27044 12.5551 9.27044H14.8749C15.3353 9.27044 15.7249 9.42981 16.0437 9.74856C16.3624 10.0673 16.5218 10.4569 16.5218 10.9173V13.9809H11.103V12.635C10.7016 12.8357 10.2825 12.9921 9.84574 13.1043C9.40893 13.2164 8.96032 13.2725 8.4999 13.2725C8.05129 13.2725 7.60858 13.2164 7.17178 13.1043C6.73497 12.9921 6.30997 12.8357 5.89678 12.635V13.9809H0.478027ZM8.4999 10.3329C8.11032 10.3329 7.74139 10.2385 7.39313 10.0496C7.04487 9.86072 6.75268 9.6128 6.51657 9.30586C6.28046 8.96349 5.98532 8.69787 5.63115 8.50898C5.27699 8.32009 4.89921 8.21974 4.49782 8.20794C4.8756 7.83016 5.46292 7.52027 6.2598 7.27825C7.05667 7.03624 7.80337 6.91523 8.4999 6.91523C9.20824 6.91523 9.96084 7.03624 10.7577 7.27825C11.5546 7.52027 12.1419 7.83016 12.5197 8.20794C12.1065 8.21974 11.7258 8.32009 11.3775 8.50898C11.0292 8.69787 10.7371 8.96349 10.5009 9.30586C10.2766 9.62461 9.9874 9.87547 9.63324 10.0585C9.27907 10.2414 8.90129 10.3329 8.4999 10.3329ZM2.83324 7.85377C2.18393 7.85377 1.62907 7.62356 1.16865 7.16315C0.708236 6.70273 0.478027 6.14787 0.478027 5.49856C0.478027 4.83745 0.708236 4.27964 1.16865 3.82513C1.62907 3.37061 2.18393 3.14336 2.83324 3.14336C3.49435 3.14336 4.05216 3.37061 4.50667 3.82513C4.96119 4.27964 5.18844 4.83745 5.18844 5.49856C5.18844 6.14787 4.96119 6.70273 4.50667 7.16315C4.05216 7.62356 3.49435 7.85377 2.83324 7.85377ZM14.1666 7.85377C13.5173 7.85377 12.9624 7.62356 12.502 7.16315C12.0416 6.70273 11.8114 6.14787 11.8114 5.49856C11.8114 4.83745 12.0416 4.27964 12.502 3.82513C12.9624 3.37061 13.5173 3.14336 14.1666 3.14336C14.8277 3.14336 15.3855 3.37061 15.84 3.82513C16.2945 4.27964 16.5218 4.83745 16.5218 5.49856C16.5218 6.14787 16.2945 6.70273 15.84 7.16315C15.3855 7.62356 14.8277 7.85377 14.1666 7.85377ZM8.4999 5.49856C7.8506 5.49856 7.29574 5.26836 6.83532 4.80794C6.3749 4.34752 6.14469 3.79266 6.14469 3.14336C6.14469 2.48224 6.3749 1.92443 6.83532 1.46992C7.29574 1.0154 7.8506 0.788147 8.4999 0.788147C9.16101 0.788147 9.71883 1.0154 10.1733 1.46992C10.6279 1.92443 10.8551 2.48224 10.8551 3.14336C10.8551 3.79266 10.6279 4.34752 10.1733 4.80794C9.71883 5.26836 9.16101 5.49856 8.4999 5.49856Z" />
                </svg>
                )
            },
        ]
    },
    {
        name: "Message List",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M0.849854 16.3267V2.51417C0.849854 1.99797 1.03365 1.55608 1.40126 1.18849C1.76885 0.820886 2.21074 0.637085 2.72694 0.637085H14.2728C14.789 0.637085 15.2309 0.820886 15.5985 1.18849C15.9661 1.55608 16.1499 1.99797 16.1499 2.51417V11.1558C16.1499 11.672 15.9661 12.1139 15.5985 12.4815C15.2309 12.8491 14.789 13.0329 14.2728 13.0329H4.1436L0.849854 16.3267Z" />
        </svg>

        ),
        subMenu: [
            {
                name: "Messenger", path: "", icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M10.1472 8.96007C10.5366 8.96007 10.8582 8.81545 11.112 8.52622C11.3659 8.23698 11.4928 7.90504 11.4928 7.53039H14.4678V2.76215H5.82611V7.5257H8.81882C8.81882 7.90347 8.94572 8.23698 9.19954 8.52622C9.45336 8.81545 9.76925 8.96007 10.1472 8.96007ZM5.82611 13.2809C5.30991 13.2809 4.86801 13.0971 4.50041 12.7295C4.13282 12.3619 3.94902 11.92 3.94902 11.4038V2.76215C3.94902 2.24596 4.13282 1.80406 4.50041 1.43647C4.86801 1.06887 5.30991 0.885071 5.82611 0.885071H14.4678C14.984 0.885071 15.4259 1.06887 15.7935 1.43647C16.1611 1.80406 16.3449 2.24596 16.3449 2.76215V11.4038C16.3449 11.92 16.1611 12.3619 15.7935 12.7295C15.4259 13.0971 14.984 13.2809 14.4678 13.2809H5.82611ZM2.53236 16.5747C2.01616 16.5747 1.57427 16.3909 1.20668 16.0233C0.839074 15.6557 0.655273 15.2138 0.655273 14.6976V4.17882H2.53236V14.6976H13.0511V16.5747H2.53236Z" />
                </svg>
                )
            },
            {
                name: "Incoming Chat", path: "", icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M2.43543 14.4413C1.91924 14.4413 1.47734 14.2575 1.10973 13.8899C0.742144 13.5223 0.55835 13.0804 0.55835 12.5642V2.43501C0.55835 1.91881 0.742144 1.47691 1.10973 1.10932C1.47734 0.741723 1.91924 0.557922 2.43543 0.557922H12.5646C13.0808 0.557922 13.5227 0.741723 13.8903 1.10932C14.2579 1.47691 14.4417 1.91881 14.4417 2.43501V12.5642C14.4417 13.0804 14.2579 13.5223 13.8903 13.8899C13.5227 14.2575 13.0808 14.4413 12.5646 14.4413H2.43543ZM7.53543 10.1204C8.01946 10.1204 8.46807 9.99056 8.88127 9.73084C9.29446 9.47112 9.62502 9.11695 9.87293 8.66834H12.5646V2.43501H2.43543V8.66834H5.16252C5.41043 9.11695 5.74689 9.47112 6.17189 9.73084C6.59689 9.99056 7.05141 10.1204 7.53543 10.1204ZM7.48231 9.19959L4.2771 5.99438L5.48127 4.79021L6.54377 5.85271V2.78917H8.42085V5.85271L9.48335 4.79021L10.6875 5.99438L7.48231 9.19959Z" />
                </svg>
                )
            },
            {
                name: "Outgoing Chat", path: "", icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M13.8126 14.9111L12.5022 13.6007L13.3876 12.6975H10.7491V10.8204H13.3876L12.4845 9.91732L13.8126 8.6069L16.9647 11.759L13.8126 14.9111ZM2.72718 12.6975C2.19593 12.6975 1.75027 12.5175 1.3902 12.1574C1.03013 11.7974 0.850098 11.3517 0.850098 10.8204V2.17878C0.850098 1.64753 1.03013 1.20187 1.3902 0.841801C1.75027 0.481731 2.19593 0.301697 2.72718 0.301697H14.273C14.8043 0.301697 15.2499 0.481731 15.61 0.841801C15.9701 1.20187 16.1501 1.64753 16.1501 2.17878V8.25274C15.8077 8.04024 15.4388 7.88086 15.0433 7.77461C14.6478 7.66836 14.2435 7.61524 13.8303 7.61524C12.5789 7.61524 11.5164 8.05204 10.6428 8.92566C9.7692 9.79927 9.33239 10.8618 9.33239 12.1132V12.6975H2.72718ZM8.5001 7.61524L14.273 4.09128V2.17878L8.5001 5.79128L2.72718 2.17878V4.09128L8.5001 7.61524Z" />
                </svg>
                )
            },
        ]
    }
]
const tools = [
    {
        name: "Broadcast",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.57923 15.9996V8.86991C6.35493 8.71195 6.17784 8.51492 6.04798 8.2788C5.91812 8.04269 5.85319 7.78297 5.85319 7.49964C5.85319 7.04675 6.01445 6.65905 6.33696 6.33654C6.65948 6.01402 7.04718 5.85276 7.50006 5.85276C7.95295 5.85276 8.34065 6.01402 8.66317 6.33654C8.98568 6.65905 9.14694 7.04675 9.14694 7.49964C9.14694 7.77117 9.08496 8.02203 8.961 8.25224C8.83704 8.48245 8.66881 8.67429 8.45632 8.82776V15.9996H6.57923ZM2.45319 12.7944C1.74486 12.1215 1.19 11.3322 0.788607 10.4265C0.387218 9.52078 0.186523 8.54516 0.186523 7.49964C0.186523 6.48793 0.378617 5.53716 0.762806 4.64736C1.14701 3.75754 1.66842 2.98352 2.32704 2.3253C2.98566 1.66708 3.76014 1.14599 4.65049 0.762042C5.54084 0.378078 6.49218 0.186096 7.50451 0.186096C8.51682 0.186096 9.46569 0.377936 10.3511 0.761617C11.2365 1.1453 12.0092 1.66644 12.669 2.32503C13.3289 2.98363 13.8513 3.7581 14.2362 4.64844C14.6211 5.53876 14.8136 6.49007 14.8136 7.50236C14.8136 8.55124 14.6129 9.52724 14.2115 10.4304C13.8101 11.3335 13.2553 12.1215 12.5469 12.7944L11.2188 11.4663C11.7456 10.972 12.1636 10.3851 12.4727 9.70551C12.7819 9.0259 12.9365 8.29061 12.9365 7.49964C12.9365 5.98853 12.4082 4.70467 11.3516 3.64808C10.295 2.59148 9.01118 2.06318 7.50006 2.06318C5.98895 2.06318 4.7051 2.59148 3.6485 3.64808C2.59191 4.70467 2.06361 5.98853 2.06361 7.49964C2.06361 8.29061 2.21667 9.02514 2.5228 9.70324C2.82892 10.3813 3.24842 10.969 3.78132 11.4663L2.45319 12.7944ZM4.45423 10.7934C4.00562 10.3802 3.65441 9.89196 3.40059 9.3287C3.14677 8.76543 3.01986 8.15574 3.01986 7.49964C3.01986 6.24825 3.45371 5.1887 4.32142 4.32099C5.18913 3.45328 6.24868 3.01943 7.50006 3.01943C8.75145 3.01943 9.811 3.45328 10.6787 4.32099C11.5464 5.1887 11.9803 6.24755 11.9803 7.49755C11.9803 8.16005 11.8534 8.77169 11.5995 9.33245C11.3457 9.89321 10.9945 10.3802 10.5459 10.7934L9.21777 9.46526C9.4893 9.22915 9.70475 8.93943 9.86413 8.5961C10.0235 8.25276 10.1032 7.88727 10.1032 7.49964C10.1032 6.78377 9.8483 6.17095 9.33853 5.66118C8.82875 5.1514 8.21593 4.89651 7.50006 4.89651C6.7842 4.89651 6.17138 5.15129 5.6616 5.66086C5.15183 6.17043 4.89694 6.783 4.89694 7.49856C4.89694 7.88886 4.97663 8.25519 5.136 8.59755C5.29538 8.93992 5.51083 9.22915 5.78236 9.46526L4.45423 10.7934Z" />
        </svg>
        )
    },
    {
        name: "Campaign",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M11.9447 7.27877V5.68502H14.9551V7.27877H11.9447ZM12.8301 12.4142L10.4218 10.6434L11.378 9.33294L13.7863 11.1392L12.8301 12.4142ZM11.378 3.66627L10.4218 2.35586L12.8301 0.585022L13.7863 1.86002L11.378 3.66627ZM2.09884 11.7059V8.80169H1.56759C1.1544 8.80169 0.797282 8.65117 0.49624 8.35013C0.195199 8.04908 0.0446777 7.69197 0.0446777 7.27877V5.72044C0.0446777 5.30724 0.195199 4.95013 0.49624 4.64908C0.797282 4.34804 1.1544 4.19752 1.56759 4.19752H4.04676L7.80093 1.93086V11.0684L4.04676 8.80169H3.69259V11.7059H2.09884ZM9.2176 8.97877V4.02044C9.55996 4.32738 9.83444 4.69336 10.041 5.11836C10.2476 5.54336 10.3509 6.00377 10.3509 6.49961C10.3509 6.99544 10.2476 7.45586 10.041 7.88086C9.83444 8.30586 9.55996 8.67183 9.2176 8.97877Z" />
        </svg>
        )
    },
    {
        name: "Auto Reply",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.60511 12.1121V4.88714L12.2187 8.49964L6.60511 12.1121ZM8.4999 16.5215C7.31935 16.5215 6.19487 16.2706 5.12646 15.7689C4.05806 15.2672 3.13428 14.5559 2.35511 13.6351V15.1048H0.478027V10.3944H5.18844V12.2715H3.66553C4.244 13.0271 4.95233 13.6114 5.79053 14.0246C6.62872 14.4378 7.53185 14.6444 8.4999 14.6444C9.81032 14.6444 11.0027 14.2489 12.077 13.458C13.1513 12.667 13.9127 11.6281 14.3614 10.3413L16.1853 10.7663C15.6187 12.4899 14.6299 13.88 13.2192 14.9366C11.8084 15.9932 10.2353 16.5215 8.4999 16.5215ZM0.495736 8.02152C0.578375 7.12429 0.767263 6.29791 1.0624 5.54235C1.35754 4.78679 1.78254 4.05485 2.3374 3.34652L3.68324 4.69235C3.32907 5.18818 3.03688 5.71648 2.80667 6.27725C2.57646 6.83801 2.43185 7.41943 2.37282 8.02152H0.495736ZM4.69261 3.71839L3.38219 2.35485C4.01969 1.84721 4.71327 1.43697 5.46292 1.12412C6.21258 0.811274 6.98879 0.607628 7.79157 0.513184V2.39027C7.2249 2.47291 6.67889 2.62933 6.15355 2.85954C5.6282 3.08975 5.14122 3.37603 4.69261 3.71839ZM12.3072 3.70068C11.8232 3.33471 11.3332 3.04548 10.8374 2.83298C10.3416 2.62048 9.79851 2.47291 9.20824 2.39027V0.513184C10.0228 0.607628 10.802 0.808322 11.5457 1.11527C12.2895 1.42221 12.986 1.83541 13.6353 2.35485L12.3072 3.70068ZM14.627 8.02152C14.5562 7.38402 14.4145 6.80259 14.202 6.27725C13.9895 5.7519 13.6884 5.2295 13.2989 4.71006L14.6447 3.36423C15.1759 4.03714 15.598 4.76909 15.9108 5.56006C16.2237 6.35103 16.4214 7.17152 16.5041 8.02152H14.627Z" />
        </svg>
        )
    },
    {
        name: "Customer Service",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M7.57926 14.4413V12.5819H13.5824V7.4465C13.5824 6.04164 13.0866 4.84928 12.0949 3.86942C11.1032 2.88956 9.90496 2.39963 8.5001 2.39963C7.09524 2.39963 5.89992 2.88956 4.91416 3.86942C3.9284 4.84928 3.43551 6.03918 3.43551 7.4391V11.9975H2.49697C2.04408 11.9975 1.65638 11.8363 1.33387 11.5138C1.01136 11.1913 0.850098 10.8036 0.850098 10.3507V8.934C0.850098 8.66248 0.915028 8.41161 1.04489 8.1814C1.17475 7.95119 1.35183 7.75935 1.57614 7.60588L1.62926 6.77359C1.73169 5.88791 1.98455 5.06736 2.38785 4.31193C2.79116 3.55651 3.29975 2.89841 3.91364 2.33765C4.52753 1.77688 5.22406 1.33713 6.00322 1.01838C6.78239 0.699628 7.61468 0.540253 8.5001 0.540253C9.38551 0.540253 10.2208 0.699628 11.0058 1.01838C11.7909 1.33713 12.4904 1.77393 13.1043 2.32879C13.7182 2.88366 14.2258 3.54 14.6272 4.29784C15.0286 5.05566 15.2824 5.87271 15.3886 6.74899L15.4418 7.54893C15.6661 7.69095 15.8402 7.87447 15.9642 8.09948C16.0881 8.32449 16.1501 8.56725 16.1501 8.82775V10.4569C16.1501 10.7284 16.0881 10.9764 15.9642 11.2007C15.8402 11.425 15.6661 11.608 15.4418 11.7496V12.5819C15.4418 13.1014 15.2617 13.5411 14.9017 13.9012C14.5416 14.2613 14.1018 14.4413 13.5824 14.4413H7.57926ZM6.37634 9.50067C6.11579 9.50067 5.89402 9.41254 5.71104 9.23629C5.52805 9.06003 5.43656 8.84163 5.43656 8.58108C5.43656 8.32053 5.52805 8.09876 5.71104 7.91577C5.89402 7.73279 6.11579 7.64129 6.37634 7.64129C6.63689 7.64129 6.85529 7.73279 7.03155 7.91577C7.2078 8.09876 7.29593 8.32053 7.29593 8.58108C7.29593 8.84163 7.2078 9.06003 7.03155 9.23629C6.85529 9.41254 6.63689 9.50067 6.37634 9.50067ZM10.644 9.50067C10.3835 9.50067 10.1617 9.41254 9.97874 9.23629C9.79576 9.06003 9.70426 8.84163 9.70426 8.58108C9.70426 8.32053 9.79576 8.09876 9.97874 7.91577C10.1617 7.73279 10.3835 7.64129 10.644 7.64129C10.9046 7.64129 11.123 7.73279 11.2993 7.91577C11.4755 8.09876 11.5636 8.32053 11.5636 8.58108C11.5636 8.84163 11.4755 9.06003 11.2993 9.23629C11.123 9.41254 10.9046 9.50067 10.644 9.50067ZM4.05531 8.17254C3.96086 6.8031 4.35088 5.60779 5.22535 4.58661C6.09981 3.56543 7.20307 3.05484 8.53514 3.05484C9.67794 3.05484 10.6661 3.43557 11.4997 4.19702C12.3333 4.95848 12.8445 5.91178 13.0334 7.05692C11.9741 7.04487 10.9774 6.79984 10.0431 6.32185C9.10888 5.84384 8.35843 5.16213 7.79176 4.27671C7.52024 5.18574 7.04957 5.97378 6.37977 6.64083C5.70997 7.30788 4.93515 7.81845 4.05531 8.17254Z" />
        </svg>
        )
    },
    {
        name: "Analytics",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M9.43952 12.733V7.15484H12.7333V12.733H9.43952ZM4.85306 12.733V0.266296H8.14681V12.733H4.85306ZM0.266602 12.733V3.96734H3.56035V12.733H0.266602Z" />
        </svg>
        )
    },
    {
        name: "Forwardin API",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M8.49997 10.2882L6.71143 8.49963L8.49997 6.71109L10.2885 8.49963L8.49997 10.2882ZM6.99476 5.59547L4.85205 3.45276L8.49997 -0.19516L12.1479 3.45276L10.0052 5.59547L8.49997 4.09026L6.99476 5.59547ZM3.45309 12.1475L-0.194824 8.49963L3.45309 4.85172L5.5958 6.99442L4.09059 8.49963L5.5958 10.0048L3.45309 12.1475ZM13.5468 12.1475L11.4041 10.0048L12.9093 8.49963L11.4041 6.99442L13.5468 4.85172L17.1948 8.49963L13.5468 12.1475ZM8.49997 17.1944L4.85205 13.5465L6.99476 11.4038L8.49997 12.909L10.0052 11.4038L12.1479 13.5465L8.49997 17.1944Z" />
        </svg>
        )
    },
]

const others = [
    {
        name: "Settings",
        path: "",
        icon: (<svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.14484 16.1496L5.82609 13.759C5.74345 13.7118 5.65491 13.6616 5.56047 13.6085C5.46602 13.5554 5.37748 13.4993 5.29484 13.4403L3.02817 14.3788L0.690674 10.235L2.56776 8.78296V8.14546L0.690674 6.72879L3.02817 2.62046L5.22401 3.52358C5.31845 3.46456 5.42175 3.40553 5.5339 3.3465C5.64606 3.28747 5.74935 3.22845 5.8438 3.16942L6.14484 0.814209H10.8553L11.1563 3.18713C11.2507 3.24615 11.354 3.30518 11.4662 3.36421C11.5783 3.42324 11.6816 3.48226 11.7761 3.54129L13.9719 2.62046L16.3094 6.72879L14.3969 8.18088V8.81838L16.274 10.235L13.9365 14.3788L11.6875 13.4403C11.6049 13.4875 11.5193 13.5376 11.4308 13.5908C11.3422 13.6439 11.2566 13.6941 11.174 13.7413L10.8553 16.1496H6.14484ZM8.48234 11.4392C9.30873 11.4392 10.0112 11.15 10.5896 10.5715C11.1681 9.99303 11.4573 9.2906 11.4573 8.46421C11.4573 7.63782 11.1681 6.93539 10.5896 6.35692C10.0112 5.77845 9.30873 5.48921 8.48234 5.48921C7.65595 5.48921 6.95352 5.77845 6.37505 6.35692C5.79658 6.93539 5.50734 7.63782 5.50734 8.46421C5.50734 9.2906 5.79658 9.99303 6.37505 10.5715C6.95352 11.15 7.65595 11.4392 8.48234 11.4392Z" />
        </svg>
        )
    },
]

const AsideDashboard = () => {
    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 pt-8 pb-20 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-black dark:border-black">
                <div className="flex items-center justify-center ps-2 pb-8">
                    <Image src="/assets/Logo/LogoDashboard.png" alt="Logo" width={180} height={180} />
                </div>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-black">
                    <div className="space-y-1 font-medium">
                        {asides.map((aside, index) => {
                            const [isOpen, setIsOpen] = useState(false);
                            if (aside.subMenu) {
                                return (
                                    <div key={index}>
                                        <div
                                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-blue-500"
                                            aria-controls={`dropdown-example-${index}`}
                                            aria-expanded={isOpen}
                                            onClick={() => setIsOpen(!isOpen)}>
                                            <span>{aside.icon}</span>
                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{aside.name}</span>
                                            <svg className="w-3 h-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </div>
                                        <div

                                            className={`py-2 space-y-2 ${isOpen ? "block" : "hidden"}`}
                                        >
                                            {aside.subMenu.map((subLink, subIndex) => (
                                                <div key={subIndex}>
                                                    <Link href={subLink.path} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-blue-500">
                                                        <span>{subLink.icon}</span>
                                                        <span className="ms-3">{subLink.name}</span>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <Link href={aside.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                        <span>
                                            {aside.icon}
                                        </span>
                                        <span className="ms-3">{aside.name}</span>
                                    </Link>
                                );
                            }
                        })}
                        <p className="text-[12px] font-light text-black py-3 dark:text-white">Tools</p>
                        {tools.map((tool, index) => (
                            <Link href={tool.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                <span>
                                    {tool.icon}
                                </span>
                                <span className="ms-3">{tool.name}</span>
                            </Link>
                        ))}
                        <p className="text-[12px] font-light text-black py-3 dark:text-white">Others</p>
                        {others.map((other, index) => (
                            <Link href={other.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                <span>
                                    {other.icon}
                                </span>
                                <span className="ms-3">{other.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Aside Mobile */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <svg className="w-6 fixed ms-6 h-6  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-transparent border-0 w-64">
                        <SheetHeader>
                            <aside className="fixed w-64 left-0 top-0 pt-8 pb-20 h-screen transition-transform  bg-white dark:bg-black" >
                                <div className="flex items-center justify-center ps-2 pb-8">
                                    <Image src="/assets/Logo/LogoDashboard.png" alt="Logo" width={180} height={180} />
                                </div>
                                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-black">

                                    <div className="space-y-1 font-medium">
                                        {asides.map((aside, index) => {
                                            const [isOpen, setIsOpen] = useState(false);
                                            if (aside.subMenu) {
                                                return (
                                                    <div key={index}>
                                                        <div
                                                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-blue-500"
                                                            aria-controls={`dropdown-example-${index}`}
                                                            aria-expanded={isOpen}
                                                            onClick={() => setIsOpen(!isOpen)}>
                                                            <span>{aside.icon}</span>
                                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{aside.name}</span>
                                                            <svg className="w-3 h-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                            </svg>
                                                        </div>
                                                        <div

                                                            className={`py-2 space-y-2 ${isOpen ? "block" : "hidden"}`}
                                                        >
                                                            {aside.subMenu.map((subLink, subIndex) => (
                                                                <div key={subIndex}>
                                                                    <Link href={subLink.path} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-blue-500">
                                                                        <span>{subLink.icon}</span>
                                                                        <span className="ms-3">{subLink.name}</span>
                                                                    </Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <Link href={aside.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                                        <span>
                                                            {aside.icon}
                                                        </span>
                                                        <span className="ms-3">{aside.name}</span>
                                                    </Link>
                                                );
                                            }
                                        })}
                                        <p className="text-[12px] text-start font-light text-black py-3 dark:text-white">Tools</p>
                                        {tools.map((tool, index) => (
                                            <Link href={tool.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                                <span>
                                                    {tool.icon}
                                                </span>
                                                <span className="ms-3">{tool.name}</span>
                                            </Link>
                                        ))}
                                        <p className="text-[12px] text-start font-light text-black py-3 dark:text-white">Others</p>
                                        {others.map((other, index) => (
                                            <Link href={other.path} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 group">
                                                <span>
                                                    {other.icon}
                                                </span>
                                                <span className="ms-3">{other.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>

    )
}

export default AsideDashboard
