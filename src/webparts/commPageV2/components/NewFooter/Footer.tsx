import * as React from 'react';
import styles from './Footer.module.scss'; // Ensure this file is named correctly

const Footer: React.FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footer_container}>
                <div className={styles.Links}>
                    <div className={styles.links_container}>

                        <a href="https://www.cnexia.com/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.9167 29C34.0833 27.625 34.2083 26.25 34.2083 24.8333C34.2083 23.4167 34.0833 22.0417 33.9167 20.6667H40.9583C41.2917 22 41.5 23.3958 41.5 24.8333C41.5 26.2708 41.2917 27.6667 40.9583 29M30.2292 40.5833C31.4792 38.2708 32.4375 35.7708 33.1042 33.1667H39.25C37.2316 36.6422 34.0294 39.275 30.2292 40.5833ZM29.7083 29H19.9583C19.75 27.625 19.625 26.25 19.625 24.8333C19.625 23.4167 19.75 22.0208 19.9583 20.6667H29.7083C29.8958 22.0208 30.0417 23.4167 30.0417 24.8333C30.0417 26.25 29.8958 27.625 29.7083 29ZM24.8333 41.4167C23.1042 38.9167 21.7083 36.1458 20.8542 33.1667H28.8125C27.9583 36.1458 26.5625 38.9167 24.8333 41.4167ZM16.5 16.5H10.4167C12.4138 13.0147 15.6139 10.3776 19.4167 9.08333C18.1667 11.3958 17.2292 13.8958 16.5 16.5ZM10.4167 33.1667H16.5C17.2292 35.7708 18.1667 38.2708 19.4167 40.5833C15.6214 39.2756 12.4256 36.6421 10.4167 33.1667ZM8.70833 29C8.375 27.6667 8.16667 26.2708 8.16667 24.8333C8.16667 23.3958 8.375 22 8.70833 20.6667H15.75C15.5833 22.0417 15.4583 23.4167 15.4583 24.8333C15.4583 26.25 15.5833 27.625 15.75 29M24.8333 8.22917C26.5625 10.7292 27.9583 13.5208 28.8125 16.5H20.8542C21.7083 13.5208 23.1042 10.7292 24.8333 8.22917ZM39.25 16.5H33.1042C32.4511 13.92 31.4857 11.4294 30.2292 9.08333C34.0625 10.3958 37.25 13.0417 39.25 16.5ZM24.8333 4C13.3125 4 4 13.375 4 24.8333C4 30.3587 6.19493 35.6577 10.1019 39.5647C12.0365 41.4993 14.3331 43.0339 16.8608 44.0808C19.3884 45.1278 22.0975 45.6667 24.8333 45.6667C30.3587 45.6667 35.6577 43.4717 39.5647 39.5647C43.4717 35.6577 45.6667 30.3587 45.6667 24.8333C45.6667 22.0975 45.1278 19.3884 44.0808 16.8608C43.0339 14.3331 41.4993 12.0365 39.5647 10.1019C37.6302 8.16739 35.3335 6.63282 32.8059 5.58584C30.2783 4.53887 27.5692 4 24.8333 4Z" fill="white" />
                                </svg>
                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexia.com</p>
                            </div>
                        </div></a>

                        <a href="https://eprogram.store/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <img src="/sites/CnexiaForEveryone/Assets/Eprogramme.webp" alt="" />
                            </div>
                            <div className={styles.link_txt}>
                                <p>eProgram</p>
                            </div>
                        </div></a>


                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/Assets/Forms/AllItems.aspx?id=%2Fsites%2FCnexiaForEveryone%2FAssets%2FCnexia%20Welcome%20Book%20VF%201504%2Epdf&parent=%2Fsites%2FCnexiaForEveryone%2FAssets&p=true&ga=1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>

                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.6875 15.625H40.625V18.75H29.6875V15.625ZM29.6875 23.4375H40.625V26.5625H29.6875V23.4375ZM29.6875 31.25H40.625V34.375H29.6875V31.25ZM9.375 15.625H20.3125V18.75H9.375V15.625ZM9.375 23.4375H20.3125V26.5625H9.375V23.4375ZM9.375 31.25H20.3125V34.375H9.375V31.25Z" fill="white" />
                                    <path d="M43.75 7.8125H6.25C5.4212 7.8125 4.62634 8.14174 4.04029 8.72779C3.45424 9.31384 3.125 10.1087 3.125 10.9375V39.0625C3.125 39.8913 3.45424 40.6862 4.04029 41.2722C4.62634 41.8583 5.4212 42.1875 6.25 42.1875H43.75C44.5788 42.1875 45.3737 41.8583 45.9597 41.2722C46.5458 40.6862 46.875 39.8913 46.875 39.0625V10.9375C46.875 10.1087 46.5458 9.31384 45.9597 8.72779C45.3737 8.14174 44.5788 7.8125 43.75 7.8125ZM6.25 10.9375H23.4375V39.0625H6.25V10.9375ZM26.5625 39.0625V10.9375H43.75V39.0625H26.5625Z" fill="white" />
                                </svg>


                            </div>
                            <div className={styles.link_txt}>
                                <p>Welcome Book</p>
                            </div>
                        </div></a>



                        <a href="https://cnexia.selfservice.vivantio.com/Account/LogIn"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2393_529)">
                                        <path d="M43.1963 8.51212L27.0791 44.6577H23.1349L12.164 19.9892H17.3286L25.1446 38.4205L39.0292 5.1826C35.0609 2.66061 30.2519 1.18115 25.003 1.18115C10.9136 1.17513 0 11.8356 0 24.6535C0 33.5874 5.30312 41.5361 13.2879 45.5315L9.86802 53.7724L20.869 47.942C22.2098 48.1499 23.5868 48.2584 25 48.2584C39.0864 48.2584 50 37.4714 50 24.6535C50 18.4434 47.4388 12.7395 43.1963 8.5091V8.51212Z" fill="white" />
                                        <path d="M46.993 0H41.1927L39.0293 5.17958C40.5509 6.1468 41.949 7.26467 43.1995 8.51211L46.993 0Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2393_529">
                                            <rect width="50" height="53.7755" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Vivantio</p>
                            </div>
                        </div></a>

                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/Assets/Forms/AllItems.aspx?id=%2Fsites%2FCnexiaForEveryone%2FAssets%2FGuide%20%2D%20CLEARVIEW%20%2Epdf&parent=%2Fsites%2FCnexiaForEveryone%2FAssets&p=true&ga=1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="143" height="29" viewBox="0 0 143 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2393_519)">
                                        <path d="M14.1096 9.08486C13.8221 9.01313 13.5346 8.96532 13.1394 8.8936C12.5645 8.79796 11.9895 8.7621 11.4146 8.7621C7.42608 8.7621 4.9108 11.0214 4.9108 14.4282C4.9108 17.8351 7.19851 20.2019 10.8996 20.2019C11.6062 20.2019 12.3129 20.178 13.0196 20.0824C13.3789 20.0107 13.7263 19.9628 14.1335 19.8433C14.1335 20.6203 14.2653 22.9513 14.2892 23.7761C13.9419 23.8717 13.2352 24.0152 12.7561 24.0869C11.9895 24.1945 11.223 24.2543 10.4444 24.2423C4.45565 24.2423 0 20.429 0 14.4282C0 9.06095 3.94062 4.75757 11.2469 4.75757C11.8817 4.75757 12.289 4.75757 12.828 4.82929C13.3071 4.87711 13.7862 4.94883 14.2653 5.04446C14.2653 6.23984 14.1934 7.27983 14.1096 9.08486Z" fill="white" />
                                        <path d="M18.0977 13.0176V4.99658H22.6012V20.0345C22.6012 20.1301 22.6012 20.154 22.697 20.154H28.2187V23.9434H18.0977V13.0176Z" fill="white" />
                                        <path d="M31.2969 13.0176V4.99658H41.4059V8.76204H35.8004V12.4797H40.7472V16.2451H35.8004V20.154H42.0527L40.5915 23.9434H31.2969V13.0176Z" fill="white" />
                                        <path d="M64.0684 13.0177V5.0684C64.4876 5.0684 65.1703 4.97277 65.7931 4.94886C66.416 4.92495 67.5059 4.94886 68.1886 4.94886C69.4942 4.92495 70.7878 5.0684 72.0574 5.39115C74.4768 5.98884 76.1058 8.23616 75.9261 10.7106C75.974 12.3005 75.3273 13.8306 74.1654 14.9064C73.8181 15.2531 73.4108 15.5519 72.9677 15.779V15.8627C73.1354 16.1018 73.4468 16.6158 77.052 21.9113C77.5671 22.6644 78.3216 23.7522 78.4414 23.9435H73.351L68.8234 16.6636H68.3923V23.9435H64.0684V13.0177ZM71.5423 10.9975C71.6741 9.81407 70.8237 8.73822 69.6259 8.60673C69.4702 8.59478 69.3025 8.59478 69.1468 8.60673C68.8594 8.58282 68.5839 8.58282 68.2964 8.60673V13.448C68.512 13.46 68.7156 13.46 68.9312 13.448C69.5062 13.448 70.0571 13.2807 70.5362 12.9579C71.171 12.4798 71.5304 11.7147 71.5064 10.9138L71.5423 10.9975Z" fill="white" />
                                        <path d="M102.504 15.4442V23.9434H97.9766V4.99658H102.504V15.4442Z" fill="white" />
                                        <path d="M106.887 13.0176V4.99658H116.984V8.76204H111.402V12.4797H116.337V16.2451H111.402V20.154H117.14V23.9434H106.887V13.0176Z" fill="white" />
                                        <path d="M52.666 0C51.1688 3.7296 43.084 23.7403 43.084 23.9077H50.9293V20.0585H48.9769L52.6301 10.3281H52.702L56.3551 20.0585H54.4387V23.9435H62.272C62.2002 23.7403 54.1872 3.69373 52.666 0Z" fill="white" />
                                        <path d="M86.3111 28.9999L95.8931 5.09225H88.0718V8.97725H89.9882L86.3949 18.7196H86.3111L82.7178 8.97725H84.6342V5.04443H76.7051C76.765 5.24765 84.8019 25.2106 86.3111 28.9999Z" fill="white" />
                                        <path d="M138.628 4.99674C138.628 4.99674 138.257 6.19212 136.939 10.9737C136.628 12.169 136.46 12.8026 136.209 13.8665H136.137C135.706 12.8265 135.071 11.4757 134.628 10.6629C133.43 8.48725 132.029 6.06063 131.166 4.55444C130.364 5.94109 128.986 8.36772 127.872 10.5314C127.262 11.667 126.675 12.9221 126.231 13.9502H126.16C125.92 12.9819 125.657 11.9539 125.285 10.7226C123.968 6.2758 123.656 4.98478 123.656 4.98478H118.865C118.937 5.25972 119.237 6.2997 121.189 12.5874L125.022 25.0075C129.37 16.7474 130.591 14.249 131.01 13.0536C131.442 14.249 132.52 16.5441 136.939 25.0075L140.712 12.5157C142.617 6.25189 143 4.93697 143 4.93697L138.628 4.99674Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2393_519">
                                            <rect width="143" height="29" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Clearview</p>
                            </div>
                        </div></a>
                    </div>
                </div>
                <div className={styles.buttom_part}>
                    <div className={styles.urls}>
                        <div className={styles.url}><a href="/sites/CnexiaForEveryone/SitePages/Home.aspx" target="_blank">Home</a></div>
                        <div className={styles.url}><a href="/sites/CnexiaForEveryone/SitePages/CommPageV5.aspx" target="_blank">Communication</a></div>
                        <div className={styles.url}><a href="/sites/CnexiaForEveryone/SitePages/CareerPageV5.aspx" target="_blank">Career</a></div>
                        <div className={styles.url}><a href="/sites/CnexiaForEveryone/SitePages/P&CFinaleV2.aspx" target="_blank">People&Culture</a></div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.cooperate}>
                        <p>© cnexia 2024</p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com/cnexia" target="_blank" className={styles.social}>
                                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_99_2)">
                                        <path d="M28 14C28 6.26806 21.7319 0 14 0C6.26806 0 0 6.26806 0 14C0 20.9877 5.11962 26.7797 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40687 13.9027 5.46875 17.1006 5.46875C18.6323 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.7299 9.1875 16.1875 10.2667 16.1875 11.3739V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7797 28 20.9879 28 14Z" fill="#1877F2" />
                                        <path d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2666 16.7299 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.6323 5.46875 17.1005 5.46875C13.9027 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5361 27.9433 13.2675 28.0002 14 28C14.7325 28.0002 15.4639 27.9433 16.1875 27.8299V18.0469H19.4496Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_99_2">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>




                            </a>
                            <a href="https://www.instagram.com/cnexiagroupe/?hl=en" target="_blank" className={styles.social}>
                                <svg width="20" height="20" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_93_1160)">
                                        <path d="M28.3281 0H8.67188C3.88253 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.88253 36 8.67188 36H28.3281C33.1175 36 37 32.2224 37 27.5625V8.4375C37 3.7776 33.1175 0 28.3281 0Z" fill="url(#paint0_radial_93_1160)" />
                                        <path d="M28.3281 0H8.67188C3.88253 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.88253 36 8.67188 36H28.3281C33.1175 36 37 32.2224 37 27.5625V8.4375C37 3.7776 33.1175 0 28.3281 0Z" fill="url(#paint1_radial_93_1160)" />
                                        <path d="M18.5013 3.9375C14.5761 3.9375 14.0834 3.95423 12.5418 4.02244C11.0032 4.09106 9.95286 4.32802 9.03393 4.67578C8.0832 5.03494 7.27686 5.51545 6.47355 6.29733C5.66953 7.07906 5.17566 7.86361 4.80538 8.78822C4.44694 9.68259 4.20311 10.7049 4.13388 12.2013C4.06494 13.7014 4.04688 14.1809 4.04688 18.0001C4.04688 21.8194 4.06422 22.2972 4.13417 23.7971C4.20499 25.2942 4.44853 26.3161 4.80566 27.2102C5.17509 28.1353 5.66895 28.9198 6.47254 29.7014C7.2757 30.4837 8.08204 30.9653 9.03205 31.3245C9.9517 31.6723 11.0022 31.9092 12.5405 31.9778C14.0823 32.046 14.5745 32.0628 18.4996 32.0628C22.4252 32.0628 22.9163 32.046 24.4579 31.9778C25.9965 31.9092 27.048 31.6723 27.9677 31.3245C28.918 30.9653 29.7231 30.4837 30.5262 29.7014C31.3302 28.9198 31.8239 28.1353 32.1943 27.2107C32.5496 26.3161 32.7936 25.2939 32.8658 23.7974C32.9351 22.2975 32.9531 21.8194 32.9531 18.0001C32.9531 14.1809 32.9351 13.7017 32.8658 12.2016C32.7936 10.7045 32.5496 9.68273 32.1943 8.78864C31.8239 7.86361 31.3302 7.07906 30.5262 6.29733C29.7223 5.51517 28.9182 5.03466 27.9668 4.67592C27.0454 4.32802 25.9945 4.09092 24.4558 4.02244C22.9141 3.95423 22.4233 3.9375 18.4968 3.9375H18.5013ZM17.2047 6.4717C17.5896 6.47114 18.019 6.4717 18.5013 6.4717C22.3604 6.4717 22.8177 6.4852 24.3417 6.55256C25.7508 6.61528 26.5157 6.84436 27.0252 7.03688C27.6997 7.29169 28.1806 7.59642 28.6861 8.08875C29.192 8.58094 29.505 9.04964 29.7677 9.70594C29.9655 10.2009 30.2013 10.9451 30.2654 12.3162C30.3347 13.7987 30.3497 14.2439 30.3497 17.9969C30.3497 21.7499 30.3347 22.1953 30.2654 23.6776C30.201 25.0487 29.9655 25.7929 29.7677 26.288C29.5058 26.9443 29.192 27.4116 28.6861 27.9035C28.1803 28.3957 27.7 28.7003 27.0252 28.9553C26.5163 29.1486 25.7508 29.3771 24.3417 29.4398C22.818 29.5072 22.3604 29.5218 18.5013 29.5218C14.642 29.5218 14.1846 29.5072 12.6611 29.4398C11.2519 29.3766 10.487 29.1475 9.97714 28.955C9.30275 28.7 8.82089 28.3954 8.31503 27.9032C7.80917 27.411 7.49611 26.9435 7.2335 26.2869C7.03564 25.7918 6.79991 25.0476 6.73573 23.6765C6.6665 22.194 6.65263 21.7488 6.65263 17.9934C6.65263 14.238 6.6665 13.7952 6.73573 12.3127C6.8002 10.9416 7.03564 10.1974 7.2335 9.70172C7.49554 9.04542 7.80917 8.57672 8.31517 8.08453C8.82118 7.59234 9.30275 7.28761 9.97728 7.03223C10.4868 6.83887 11.2519 6.61036 12.6611 6.54736C13.9944 6.48872 14.5111 6.47114 17.2047 6.46819V6.4717ZM26.2164 8.80664C25.2589 8.80664 24.482 9.5618 24.482 10.4936C24.482 11.4252 25.2589 12.1811 26.2164 12.1811C27.1739 12.1811 27.9508 11.4252 27.9508 10.4936C27.9508 9.56194 27.1739 8.80608 26.2164 8.80608V8.80664ZM18.5013 10.7783C14.4024 10.7783 11.079 14.0119 11.079 18.0001C11.079 21.9884 14.4024 25.2204 18.5013 25.2204C22.6004 25.2204 25.9225 21.9884 25.9225 18.0001C25.9225 14.012 22.6001 10.7783 18.501 10.7783H18.5013ZM18.5013 13.3125C21.162 13.3125 23.3191 15.4111 23.3191 18.0001C23.3191 20.5889 21.162 22.6877 18.5013 22.6877C15.8406 22.6877 13.6836 20.5889 13.6836 18.0001C13.6836 15.4111 15.8405 13.3125 18.5013 13.3125Z" fill="white" />
                                    </g>
                                    <defs>
                                        <radialGradient id="paint0_radial_93_1160" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.82812 38.7727) rotate(-90) scale(35.6787 34.1058)">
                                            <stop stop-color="#FFDD55" />
                                            <stop offset="0.1" stop-color="#FFDD55" />
                                            <stop offset="0.5" stop-color="#FF543E" />
                                            <stop offset="1" stop-color="#C837AB" />
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_93_1160" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.19764 2.59327) rotate(78.375) scale(15.9659 67.4934)">
                                            <stop stop-color="#3771C8" />
                                            <stop offset="0.128" stop-color="#3771C8" />
                                            <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                        </radialGradient>
                                        <clipPath id="clip0_93_1160">
                                            <rect width="37" height="36" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href="https://www.linkedin.com/company/cnexia/mycompany/" target="_blank" className={styles.social}>
                                <svg width="20" height="20" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_93_1168)">
                                        <path d="M39.0469 0H11.9531C5.3516 0 0 5.45653 0 12.1875V39.8125C0 46.5435 5.3516 52 11.9531 52H39.0469C45.6484 52 51 46.5435 51 39.8125V12.1875C51 5.45653 45.6484 0 39.0469 0Z" fill="white" />
                                        <path d="M39.0469 0H11.9531C5.3516 0 0 5.45653 0 12.1875V39.8125C0 46.5435 5.3516 52 11.9531 52H39.0469C45.6484 52 51 46.5435 51 39.8125V12.1875C51 5.45653 45.6484 0 39.0469 0Z" fill="#0A66C2" />
                                        <path d="M36.7987 44.2173H42.6298C42.8411 44.2173 43.0438 44.1317 43.1932 43.9794C43.3427 43.827 43.4266 43.6204 43.4267 43.405L43.4297 30.8433C43.4297 24.2777 42.0421 19.2311 34.517 19.2311C31.6565 19.1226 28.9588 20.6261 27.5031 23.1367C27.496 23.1489 27.4852 23.1584 27.4723 23.1638C27.4594 23.1691 27.4451 23.17 27.4317 23.1663C27.4183 23.1626 27.4064 23.1545 27.3979 23.1432C27.3894 23.132 27.3847 23.1182 27.3846 23.104V20.6497C27.3846 20.4342 27.3007 20.2275 27.1512 20.0752C27.0018 19.9228 26.7991 19.8372 26.5877 19.8372H21.054C20.8427 19.8372 20.64 19.9228 20.4906 20.0752C20.3411 20.2275 20.2572 20.4342 20.2572 20.6497V43.4037C20.2572 43.6192 20.3411 43.8259 20.4906 43.9783C20.64 44.1306 20.8427 44.2162 21.054 44.2162H26.8848C27.0961 44.2162 27.2988 44.1306 27.4482 43.9783C27.5977 43.8259 27.6816 43.6192 27.6816 43.4037V32.1561C27.6816 28.9758 28.2733 25.8958 32.1404 25.8958C35.9524 25.8958 36.0018 29.535 36.0018 32.3621V43.4048C36.0018 43.6203 36.0858 43.8269 36.2352 43.9793C36.3847 44.1317 36.5873 44.2173 36.7987 44.2173ZM7.57031 12.1119C7.57031 14.5218 9.51608 16.5047 11.8798 16.5047C14.2429 16.5045 16.1875 14.5204 16.1875 12.1109C16.1871 9.70145 14.2423 7.71875 11.879 7.71875C9.51509 7.71875 7.57031 9.70206 7.57031 12.1119ZM8.95668 44.2173H14.7952C15.0065 44.2173 15.2092 44.1317 15.3587 43.9793C15.5081 43.8269 15.5921 43.6203 15.5921 43.4048V20.6497C15.5921 20.4342 15.5081 20.2275 15.3587 20.0752C15.2092 19.9228 15.0065 19.8372 14.7952 19.8372H8.95668C8.74533 19.8372 8.54264 19.9228 8.3932 20.0752C8.24376 20.2275 8.1598 20.4342 8.1598 20.6497V43.4048C8.1598 43.6203 8.24376 43.8269 8.3932 43.9793C8.54264 44.1317 8.74533 44.2173 8.95668 44.2173Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_93_1168">
                                            <rect width="51" height="52" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;
