let bmw=["beyazbmw","400000","siyahbmw","400000","mavibmw","400000"];
let nissan=["siyahnissan","600000","beyaznissan","600000","lacivertnissan","600000"];
let toyota=["beyaztoyota","500000","siyahtoyota","500000","gritoyota","500000"];

let i;

let urunAciklama,urunSecenek;

let eklenecekler=[];
let fiyatlar=[];

let listeSepet=document.getElementById("sepetMarket");


let toplamTutar=0;

const kod="GALERİ10000";


for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}   

function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

function urunleriGetir(){

    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }


    if(document.getElementById("kategoriBmw").checked)
    {
        for(i=0;i<bmw.length;i=i+2)
        {
            olustur();
            urunSecenek.value=bmw[i+1];
            urunAciklama.innerHTML=bmw[i]; 
        }
    }
    else if(document.getElementById("kategoriNissan").checked)
    {
        for(i=0;i<nissan.length;i=i+2)
        {
        olustur();
        urunSecenek.value=nissan[i+1];
        urunAciklama.innerHTML=nissan[i];
        }
    }
    else if(document.getElementById("kategoriToyota").checked)
    {
        for(i=0;i<toyota.length;i=i+2)
        {
        olustur();
        urunSecenek.value=toyota[i+1];
        urunAciklama.innerHTML=toyota[i];
        }
    }
}

function sepeteEkle(){

    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");
    

        eklenecekler=[];
        fiyatlar=[];

    
        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                toplamTutar+=Number(listeUrunlerFiyat[i].value);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
                fiyatlar.push(listeUrunlerFiyat[i].value);
            }
        }

      
        console.log(eklenecekler);
        console.log(fiyatlar);


    let adet=document.getElementById("urunAdet").value;
    console.log(adet);


    for(i=0;i<adet;i++)
    {
        let sepeteEklenecekUrun;
   
        for(i=0;i<eklenecekler.length;i++){
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
    
            sepeteEklenecekUrun.text=eklenecekler[i];
            sepeteEklenecekUrun.value=fiyatlar[i];
        }
 
    }

    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

function sepettenCikar(){

    let seciliIndeks=listeSepet.selectedIndex;
    let silinecekUrununFiyati=listeSepet.options[seciliIndeks].value;
    listeSepet.options.remove(seciliIndeks);

    toplamTutar=toplamTutar-silinecekUrununFiyati;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}


function sepetiBosalt(){
    document.querySelectorAll('#sepetMarket option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";

}



