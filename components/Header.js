import Image from 'next/image'
function Header() {
    return (
        <div class="sticky flex">
            <div className="">
              <Image src="https://raw.githubusercontent.com/sanyagoyal2000/myntra-clone/main/components/images/logo.jpeg" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>
            <div className=""></div>
            <div className=""></div> 
            <div className=""></div> 
        </div>
    )
}

export default Header

