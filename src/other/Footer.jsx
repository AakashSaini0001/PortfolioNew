import React from 'react'


const Footer = () => {
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-black">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    {/* <img alt="" class="h-11" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg" /> */}
                    <p className="mt-6 text-3xl text-cyan-300 mb-3">
                      Let's connect
                    </p>
                    <p  className='text-md'> To explore more opportuinity together. Just drop me a mail or call me on the given number.</p>
                    <div className="flex items-center gap-2 mt-4">
                        {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" /> */}
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5 text-cyan-300">Connection Links</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="https://github.com/AakashSaini0001">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/aakash-saini-993418263/">LinkedIN</a></li>
                            <li><a href="https://x.com/home?lang=en">Twitter (X)</a></li>
                            {/* <li><a href="#">Privacy policy</a></li> */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-cyan-300">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>7310639070</p>
                            <p>aakashsaini0104@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer