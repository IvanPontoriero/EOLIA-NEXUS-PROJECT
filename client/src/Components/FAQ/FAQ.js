import './faq.css'

const FAQ = () => {
    return(
        <div className='faq' id='faq'>
            <h1 className='faq-title'>F.A.Q.</h1>
            <div className='main-faq'>
                <h2 className='faq-subtitle'>
                        WHAT EVEN IS A FOUNDING STONE?   
                    </h2>
                    <p className='faq-text'>
                        The founding stones are NFTs that will be the pillars upon which 
                        the project will be built. The owners will be rewarded for their 
                        trust in the project with SOL, further details can be found on the whitepaper.
                    </p> 
            </div>
            <div className='faqs-container'>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        WHEN WILL MINTING START?    
                    </h2>
                    <p className='faq-text'>
                        The mint will be available at the time indicated by the countdown.    
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MUCH WILL THE TOKENS COST DURING THE MINT?    
                    </h2>
                    <p className='faq-text'>
                        Each Funding Stone will cost 1 SOL.
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MANY FOUNDING STONES WILL BE AVAILABLE?    
                    </h2>
                    <p className='faq-text'>
                        There will be 1000 founding stones.   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MANY FOUNDING STONES CAN I BUY?   
                    </h2>
                    <p className='faq-text'>
                        The purchase of founding stones is limited to 20 tokens per wallet.   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        WHAT WALLET SHOULD I USE TO MINT MY FOUNDING STONE?   
                    </h2>
                    <p className='faq-text'>
                        We highly recommend <a href='https://phantom.app/' target='_blank'>Phantom</a>   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        ARE THERE ANY ROYALTIES ON SECONDARY SALES?   
                    </h2>
                    <p className='faq-text'>
                        All secondary market trades will have a 4% royalty.<br/>
                        Which will be divided in three parts:<br/>
                        2% redistributed among founding stone's holders at the end of the quarter..<br/>
                        1% will be evenly distributed among holders of the original colletibles and the Major Prize<br/>
                        1% to a prize pool, distributed quarterly among 10 random holders.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;