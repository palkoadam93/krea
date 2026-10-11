const citySectors = {
  education: {
    id: '01',
    tag: 'DIGITÁLIS TANULÁS',
    title: 'Oktatás és kutatás',
    copy: 'Iskolák, egyetemek és kutatóintézetek hálózata. A digitális tanulási környezetek és kutatási rendszerek összekapcsolják a tudást.',
    chips: ['E-learning', 'AI', 'Hálózatok']
  },
  health: {
    id: '02',
    tag: 'ÖSSZEKAPCSOLT ELLÁTÁS',
    title: 'Egészségügy',
    copy: 'Kórházak, rendelők és távellátási szolgáltatások. A betegadatok védett rendszerekben mozognak, az érzékelők segítik a diagnosztikát.',
    chips: ['Telemedicina', 'IoMT', 'Adatvédelem']
  },
  foreign: {
    id: '03',
    tag: 'KÜLSŐ KAPCSOLATOK',
    title: 'Külügy',
    copy: 'A városállam diplomáciai, kereskedelmi és nemzetközi digitális kapcsolatai. Biztonságos kommunikáció és határokon átnyúló információcsere.',
    chips: ['Titkosítás', 'Nemzetközi hálózatok', 'Digitális diplomácia']
  },
  interior: {
    id: '04',
    tag: 'KÖZBIZTONSÁG',
    title: 'Belügy és biztonság',
    copy: 'Rendőrségi, katasztrófavédelmi és segélyhívó rendszerek. A biztonság és a polgárok magánéletének védelme állandó egyensúlyt kíván.',
    chips: ['Kiberbiztonság', 'Vészhelyzeti hálózat', 'Hozzáférés']
  },
  economy: {
    id: '05',
    tag: 'DIGITÁLIS GAZDASÁG',
    title: 'Gazdaság és vállalatok',
    copy: 'Technológiai vállalatok, gyártás, szolgáltatások és kereskedelem. A cégek felhőplatformokon, automatizált rendszerekkel működnek.',
    chips: ['Felhő', 'ERP', 'E-kereskedelem']
  },
  finance: {
    id: '06',
    tag: 'DIGITÁLIS JEGYBANKPÉNZ',
    title: 'Pénzrendszer / CBDC',
    copy: 'A városállam központi bankja által kibocsátott digitális pénz és a hozzá kapcsolódó fizetési infrastruktúra. A működés és az adatvédelem társadalmi kérdés is.',
    chips: ['CBDC', 'Digitális fizetés', 'Tranzakciók']
  },
  government: {
    id: '07',
    tag: 'INTELLIGENS KÖZSZOLGÁLTATÁSOK',
    title: 'Közigazgatás és IoT',
    copy: 'Közlekedés, közvilágítás, energia és városüzemeltetés. Szenzorok és digitális ikermodellek támogatják a szolgáltatások irányítását.',
    chips: ['IoT', 'Digitális iker', 'Okosközlekedés']
  },
  entertainment: {
    id: '08',
    tag: 'KULTÚRA ÉS MÉDIA',
    title: 'Szórakoztatás és média',
    copy: 'Független podcastok, filmstúdiók, játékfejlesztők, streaming és e-sport. A történetek ugyanazon a hálózati infrastruktúrán jutnak el a közönséghez.',
    chips: ['Streaming', 'Videojáték', 'Virtuális produkció']
  }
};

const sectorButtons = document.querySelectorAll('.sc-sector');

sectorButtons.forEach(button => button.addEventListener('click', () => {
  const sector = citySectors[button.dataset.sector];
  if (!sector) return;
  sectorButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  document.getElementById('sc-detail-id').textContent = sector.id + ' / 08';
  document.getElementById('sc-detail-tag').textContent = sector.tag;
  document.getElementById('sc-detail-title').textContent = sector.title;
  document.getElementById('sc-detail-copy').textContent = sector.copy;
  document.getElementById('sc-detail-chips').replaceChildren(...sector.chips.map(label => { const chip = document.createElement('span'); chip.textContent = label; return chip; }));
}));
