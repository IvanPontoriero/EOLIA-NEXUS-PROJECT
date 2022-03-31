import './faq.css'

const FAQ = () => {
    return(
        <div className='faq' id='faq'>
            <h1 className='faq-title'>F.A.Q.</h1>
            <div className='main-faq'>
                <h2 className='faq-subtitle'>
                        WHAT THE FUCK IS A FOUNDING STONE?!?!?!   
                    </h2>
                    <p className='faq-text'>
                        The founding stones are NFTs that will be the pillars of the birth
                        of the project and its execution. The owners  will be rewarded for 
                        the trusting in the project.
                    </p> 
            </div>
            <div className='faqs-container'>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        WHEN WILL MINTING STARTING?    
                    </h2>
                    <p className='faq-text'>
                        The mint will be available at the time indicated by the countdown.    
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MUCH WILL COST THE MINT?    
                    </h2>
                    <p className='faq-text'>
                        The first minting will cost 2SOL regardless of the variations of the
                        that the asset may suffer.   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MANY FOUNDING STONES WILL BE AVAILABLE?    
                    </h2>
                    <p className='faq-text'>
                        There will be 400 founding stones.   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        HOW MANY FOUNDING CAN I BUY?   
                    </h2>
                    <p className='faq-text'>
                        The purchase of founding stones is limited to 2 tokens per wallet.   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        WHAT WALLET SHOULD I USE TO MINT MY FOUNDING STONE?   
                    </h2>
                    <p className='faq-text'>
                        You could use the most popular wallet in Solana for NFT: <a href='https://phantom.app/' target='_blank'>Phantom</a>   
                    </p>
                </div>
                <div className='faq-frame'>
                    <h2 className='faq-subtitle'>
                        ARE THERE ANY ROYALTIES ON SECONDARY SALES?   
                    </h2>
                    <p className='faq-text'>
                        All secondary market trades will have a 3% royalty.<br/>
                        These royalties will be divided in three equal parts:<br/>
                        1% to founding stones.<br/>
                        1% to creators.<br/>
                        1% to a prize pool, which will be distributed quaterly among 10 holders.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;