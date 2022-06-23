export default function SellButton() {
  return (
    <a href='' style={{ color: 'white', textDecoration: 'none' }}>
      <img href='/svg/fi_plus.svg'/>
      <button
        className='fixed-bottom container'
        style={{
          width: '115px',
          height: '52px',
          backgroundColor: '#7126B5',
          
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          marginBottom: '28px',
          boxShadow: '1px 2px 30px #7126B5',
        }}
      >Jual</button>
    </a>
  );
}
