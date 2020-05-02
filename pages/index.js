import Head from 'next/head'

if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5eaddd92203e206707f8f978/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

const Index = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500"
        rel="stylesheet"
        key="google-font-montserrat"
        />
    </Head>
    <p className="logo">Pretendy</p>
      <style jsx>{`
        .logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          padding: 0;
          margin: 0;

          font-family: 'Montserrat', 'Roboto';
          color: #37485a;
          z-index: 1;
          font-size: 58px;
        }
      `}</style>
  </div>
)

export default Index
