import Image from 'next/image'
function Header() {
    return (
        <div class="sticky flex">
            <div className="">
              <Image src="https://raw.githubusercontent.com/sanyagoyal2000/myntra-clone/main/components/images/logo.jpeg" height={500} width={500}/>
            </div>
            <div className=""></div>
            <div className=""></div> 
            <div className=""></div> 
        </div>
    )
}

export default Header
