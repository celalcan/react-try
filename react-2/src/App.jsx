import { useState } from 'react'
import './App.css'

function App() {
const [vize1, setVize1] = useState(0);
const [vize2, setVize2] = useState(0);
const [ortalama, setOrtalama] = useState(null);

const ortalamabul = ()=>{
  let toplamSonuc = topla()/2;
  yazdir (toplamSonuc);
  setOrtalama(toplamSonuc);
}

const topla=() =>{
  const toplam= vize1 + vize2;
  return toplam;  
}

const yazdir = (sonuc) =>{
  console.log("Ortalama : " + sonuc)
}

  return (
  <>
<div>
  <input type="number" value={vize1}  onChange={(e)=> setVize1(Number(e.target.value))} />
</div>
<div>
  <input type="number" value={vize2}  onChange={(e)=> setVize2(Number(e.target.value))} />
</div>
<div>
  <button onClick={ortalamabul}>Ortalama Bul</button>
</div>

<div>
{ortalama !== null && <p>Ortalama: {ortalama}</p>} {/* Ortalama sonucu burada yazdır */}
</div> 

<s></s>
  </>
  )
}

export default App
