const places=[
{name:"Zenith Restaurant",type:"restaurant",lat:11.0168,lng:76.9558,rating:"★ 4.8",desc:"Italian Restaurant · 500m",img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"},
{name:"Brookefields Mall",type:"shopping",lat:11.0183,lng:76.9700,rating:"★ 4.6",desc:"Shopping Mall · 2.1km",img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"},
{name:"Ganga Hospital",type:"hospital",lat:11.0116,lng:76.9467,rating:"★ 4.7",desc:"Hospital · 1.1km",img:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"},
{name:"VOC Park",type:"park",lat:11.0074,lng:76.9608,rating:"★ 4.5",desc:"Park · 1.2km",img:"https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=700&q=80"},
{name:"Sunset Hotel",type:"hotel",lat:11.022,lng:76.962,rating:"★ 4.5",desc:"Hotel · 1.2km",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"},
{name:"KPR College",type:"college",lat:11.047,lng:77.001,rating:"★ 4.5",desc:"College · 5.2km",img:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"},
{name:"Cafe Mocha",type:"restaurant",lat:11.020,lng:76.950,rating:"★ 4.6",desc:"Cafe · 450m",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"},
{name:"PSG Tech",type:"college",lat:11.0167,lng:76.9878,rating:"★ 4.6",desc:"College · 3.4km",img:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"},
{name:"KG Hospital",type:"hospital",lat:11.0120,lng:76.9585,rating:"★ 4.6",desc:"Hospital · 900m",img:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"},
{name:"Race Course Park",type:"park",lat:11.0016,lng:76.9735,rating:"★ 4.7",desc:"Park · 2.0km",img:"https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=700&q=80"},
{name:"Ukkadam Lake",type:"park",lat:10.9958,lng:76.9572,rating:"★ 4.5",desc:"Lake & Park · 2.5km",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80"},
{name:"Fun Republic Mall",type:"shopping",lat:11.0196,lng:76.9792,rating:"★ 4.5",desc:"Shopping Mall · 2.8km",img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"},
{name:"Prozone Mall",type:"shopping",lat:11.0360,lng:76.9940,rating:"★ 4.4",desc:"Shopping Mall · 4.3km",img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"},
{name:"Tidel Park Coimbatore",type:"college",lat:11.0780,lng:76.9950,rating:"★ 4.4",desc:"Technology Hub · 7.2km",img:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80"},
{name:"Gandhipuram",type:"shopping",lat:11.0183,lng:76.9680,rating:"★ 4.5",desc:"City Centre · 1.8km",img:"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80"},
{name:"Grand Plaza Hotel",type:"hotel",lat:11.0108,lng:76.9662,rating:"★ 4.4",desc:"Hotel · 1.6km",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"},
{name:"VOC Ground",type:"park",lat:11.0060,lng:76.9640,rating:"★ 4.4",desc:"Open Park · 1.4km",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"},
{name:"PSG Hospitals",type:"hospital",lat:11.0227,lng:76.9898,rating:"★ 4.6",desc:"Hospital · 3.7km",img:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"}
];
const emoji={restaurant:"🍴",hotel:"▣",hospital:"✚",college:"◆",park:"♣",shopping:"▤"};
// Offline-safe real-place fallback. Live providers are tried first; these verified city landmarks keep search useful when an API is blocked.
const fallbackRealPlaces=[
{name:"Brookefields Mall",type:"shopping",lat:11.0183,lng:76.9700,desc:"Shopping mall · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"},
{name:"Gandhipuram",type:"shopping",lat:11.0183,lng:76.9680,desc:"City centre · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80"},
{name:"Ganga Hospital",type:"hospital",lat:11.0116,lng:76.9467,desc:"Hospital · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"},
{name:"PSG Hospitals",type:"hospital",lat:11.0227,lng:76.9898,desc:"Hospital · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"},
{name:"VOC Park",type:"park",lat:11.0074,lng:76.9608,desc:"Park · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=700&q=80"},
{name:"Ukkadam Lake",type:"park",lat:10.9958,lng:76.9572,desc:"Lake and park · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80"},
{name:"PSG College of Technology",type:"college",lat:11.0167,lng:76.9878,desc:"College · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"},
{name:"Tidel Park Coimbatore",type:"college",lat:11.0780,lng:76.9950,desc:"Technology park · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80"},
{name:"Prozone Mall",type:"shopping",lat:11.0360,lng:76.9940,desc:"Shopping mall · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"},
{name:"The Residency Towers Coimbatore",type:"hotel",lat:11.0177,lng:76.9731,desc:"Hotel · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"},
{name:"Annapoorna",type:"restaurant",lat:11.0162,lng:76.9550,desc:"Restaurant · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"},
{name:"Junior Kuppanna",type:"restaurant",lat:11.0189,lng:76.9625,desc:"Restaurant · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80"},
{name:"Kumaraguru College of Technology",type:"college",lat:11.0780,lng:76.9940,desc:"College · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"}
];
function fallbackSearch(q){const terms=q.toLowerCase().split(/\s+/).filter(Boolean);return fallbackRealPlaces.filter(p=>terms.every(t=>(p.name+" "+p.type+" "+p.desc).toLowerCase().includes(t))).slice(0,6)}
function showSearchResults(data,box){box.innerHTML="";data.forEach(item=>{const d=document.createElement("div");d.className="live-result";d.innerHTML=`🌐 <b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.display_name||item.desc||"Real place")}</small>`;d.onclick=()=>{clearLiveSearchMarkers();addLivePlace(item);$("search").value=item.name;box.style.display="none"};box.appendChild(d)});box.style.display=data.length?"block":"none"}

const map=L.map("map",{zoomControl:false,preferCanvas:true}).setView([11.0168,76.9558],13);
const mapLayer=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
const terrainLayer=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png");
let currentLayer=mapLayer,markers=[],activeType="all",activePlace=places[0],saved=new Set(),routeLines=[],measurePoints=[],measureMarkers=[];
let livePlaces=[],liveMarkers=[];
let nearbyPlaces=[],nearbyMarkers=[],nearbyCategory="all",nearbyBusy=false,nearbyRequestId=0;

function clearNearbyMarkers(){nearbyMarkers.forEach(m=>map.removeLayer(m));nearbyMarkers=[]}
function nearbyType(tags={}){const amenity=(tags.amenity||"").toLowerCase(),tourism=(tags.tourism||"").toLowerCase(),shop=(tags.shop||"").toLowerCase(),leisure=(tags.leisure||"").toLowerCase();if(/restaurant|cafe|fast_food|food_court/.test(amenity))return "restaurant";if(/hospital|clinic|doctors|pharmacy/.test(amenity))return "hospital";if(/hotel|guest_house|hostel/.test(tourism))return "hotel";if(/college|university|school/.test(amenity))return "college";if(/park|garden|playground|nature_reserve/.test(leisure))return "park";if(shop||/commercial|market/.test(amenity))return "shopping";return "shopping"}
async function scanNearby(){const status=$("nearbyStatus"),box=$("nearbyResults");if(!status||!box||nearbyBusy)return;nearbyBusy=true;const requestId=++nearbyRequestId;status.textContent="SCANNING";box.innerHTML='<div class="nearby-empty">📡 Scanning real nearby places...</div>';const center=map.getCenter(),radius=3500;const query=`[out:json][timeout:15];(node(around:${radius},${center.lat},${center.lng})[name];way(around:${radius},${center.lat},${center.lng})[name];relation(around:${radius},${center.lat},${center.lng})[name];);out center tags;`;try{const endpoints=["https://overpass-api.de/api/interpreter","https://overpass.kumi.systems/api/interpreter"];let response=null,lastError=null;for(const endpoint of endpoints){try{const url=endpoint+"?data="+encodeURIComponent(query);const r=await fetch(url,{method:"GET",headers:{"Accept":"application/json"},cache:"no-store"});if(r.ok){response=r;break}lastError=new Error("HTTP "+r.status)}catch(err){lastError=err}}if(!response)throw(lastError||new Error("Nearby service unavailable"));const json=await response.json();nearbyPlaces=json.elements.map(item=>{const lat=item.lat??item.center?.lat,lng=item.lon??item.center?.lon,tags=item.tags||{};if(lat==null||lng==null||!tags.name)return null;return{id:item.id,name:tags.name,type:nearbyType(tags),lat:Number(lat),lng:Number(lng),tags}}).filter(Boolean).filter(p=>nearbyCategory==="all"||p.type===nearbyCategory).slice(0,40);if(requestId!==nearbyRequestId){return}renderNearbyResults();status.textContent=`${nearbyPlaces.length} FOUND`;toast(nearbyPlaces.length?`Found ${nearbyPlaces.length} nearby places`:"No nearby places found")}catch(error){
if(requestId!==nearbyRequestId)return;
console.warn("Live nearby search unavailable, using built-in places:",error);
const centerNow=map.getCenter();
const toRad=v=>v*Math.PI/180;
const distanceKm=(a,b)=>{
  const R=6371,dLat=toRad(b.lat-a.lat),dLng=toRad(b.lng-a.lng);
  const x=Math.sin(dLat/2)**2+Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
};
nearbyPlaces=fallbackRealPlaces
  .map(p=>({...p,distance:distanceKm(centerNow,{lat:p.lat,lng:p.lng})}))
  .filter(p=>p.distance<=8)
  .filter(p=>nearbyCategory==="all"||p.type===nearbyCategory)
  .sort((a,b)=>a.distance-b.distance)
  .slice(0,20);
renderNearbyResults();
status.textContent=`${nearbyPlaces.length} READY`;
toast(nearbyPlaces.length?`Live service unavailable — showing ${nearbyPlaces.length} built-in nearby places`:"No fallback places in this area");
}finally{nearbyBusy=false}}
function renderNearbyResults(){const box=$("nearbyResults");if(!box)return;box.innerHTML="";if(!nearbyPlaces.length){box.innerHTML='<div class="nearby-empty">No places found in this category.</div>';clearNearbyMarkers();return}clearNearbyMarkers();nearbyPlaces.forEach(place=>{const marker=L.marker([place.lat,place.lng],{icon:icon(place.type)}).addTo(map);marker.bindTooltip(`<b>${escapeHtml(place.name)}</b><br>Real nearby place`,{direction:"top",offset:[0,-30]});marker.on("click",()=>selectLiveNearby(place));nearbyMarkers.push(marker);const row=document.createElement("button");row.className="nearby-result";row.innerHTML=`<span class="nearby-icon">${emoji[place.type]||"📍"}</span><span><b>${escapeHtml(place.name)}</b><small>${place.type}</small></span><span>›</span>`;row.onclick=()=>{map.flyTo([place.lat,place.lng],16,{duration:.8});selectLiveNearby(place,false)};box.appendChild(row)})}
function selectLiveNearby(place,fly=true){const p={name:place.name,type:place.type,lat:place.lat,lng:place.lng,rating:"LIVE",desc:"Real nearby place · OpenStreetMap",img:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=700&q=80",live:true};selectPlace(p,fly)}
const $=id=>document.getElementById(id);
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),1900)}
function icon(type){return L.divIcon({className:"",html:`<div class="custom-pin" data-place-type="${escapeHtml(type||"place")}" aria-hidden="true"><span></span></div>`,iconSize:[42,42],iconAnchor:[21,42]})}
function render(type=activeType){
  activeType=type;
  markers.forEach(m=>map.removeLayer(m));
  markers=[];
  const visible=places.filter(p=>type==="all"||p.type===type);
  const zoom=map.getZoom();
  if(zoom<=11 && type==="all"){
    const groups=new Map();
    visible.forEach(p=>{
      const key=`${Math.round(p.lat*80)/80}|${Math.round(p.lng*80)/80}`;
      if(!groups.has(key))groups.set(key,[]);
      groups.get(key).push(p);
    });
    groups.forEach(group=>{
      if(group.length===1){addPlaceMarker(group[0]);return;}
      const lat=group.reduce((a,p)=>a+p.lat,0)/group.length,lng=group.reduce((a,p)=>a+p.lng,0)/group.length;
      const cm=L.marker([lat,lng],{icon:clusterIcon(group.length)}).addTo(map);
      cm.bindTooltip(`<b>${group.length} places</b><br>Zoom in to explore`,{direction:"top",offset:[0,-25]});
      cm.on("click",()=>map.flyTo([lat,lng],Math.min(14,map.getZoom()+2),{duration:.55}));
      markers.push(cm);
    });
  }else visible.forEach(addPlaceMarker);
  addCharacters();renderPopular();
}
function addPlaceMarker(p){
  const m=L.marker([p.lat,p.lng],{icon:icon(p.type)}).addTo(map);
  m.bindTooltip(`<b>${escapeHtml(p.name)}</b><br>${escapeHtml(p.desc)}`,{direction:"top",offset:[0,-30]});
  m.on("click",()=>selectPlace(p));
  markers.push(m);
}
function clusterIcon(count){
  const size=count>=10?58:count>=5?52:46;
  return L.divIcon({className:"smart-cluster-icon",html:`<div class="smart-cluster" style="width:${size}px;height:${size}px"><span>${count}</span><i></i></div>`,iconSize:[size,size],iconAnchor:[size/2,size/2]});
}
function addCharacters(){const layer=$("characterLayer");layer.innerHTML="";if($("charToggle").checked===false)return;const chosen=places.filter(p=>activeType==="all"||p.type===activeType).slice(0,4);const colors=["char-blue","char-pink","char-green","char-blue"];chosen.forEach((p,i)=>{const pt=map.latLngToContainerPoint([p.lat,p.lng]);const el=document.createElement("div");el.className=`map-character ${colors[i]}`;el.style.left=(pt.x-38)+"px";el.style.top=(pt.y-105)+"px";el.style.animationDelay=(-i*.55)+"s";el.innerHTML=`<div class="hair"></div><div class="head"><i class="eye e1"></i><i class="eye e2"></i><i class="smile"></i></div><div class="arm a1"></div><div class="arm a2"></div><div class="body"></div><div class="badge" aria-hidden="true">MX</div><div class="label">${p.name}</div>`;el.onclick=()=>selectPlace(p);layer.appendChild(el)})}

function renderCityFx(){
  const layer=$("cityFx"); if(!layer)return;
  layer.innerHTML="";
  const wrap=$("mapWrap");
  const enabled=wrap.classList.contains('hyper3d')||wrap.classList.contains('depth-mode');
  if(!enabled)return;
  const z=map.getZoom();
  const center=map.getCenter();
  const size=map.getSize();
  // Decorative 3D city overlay: the underlying OSM map remains the geographic source.
  // Buildings are intentionally schematic, not claimed as real building footprints.
  const density=z>=15?24:z>=13?15:9;
  for(let i=0;i<density;i++){
    const cols=Math.ceil(Math.sqrt(density));
    const col=i%cols,row=Math.floor(i/cols);
    const jitterX=Math.sin(i*12.7)*28,jitterY=Math.cos(i*8.9)*24;
    const x=size.x*(col+0.5)/cols+jitterX;
    const y=size.y*(row+0.48)/Math.ceil(density/cols)+jitterY;
    if(x<25||x>size.x-25||y<35||y>size.y-30)continue;
    const b=document.createElement('div');b.className='city-building procedural-building';
    const h=22+Math.abs(Math.sin(i*4.17))*70*(z>=14?1:.7),w=14+Math.abs(Math.cos(i*2.31))*26;
    b.style.setProperty('--x',x+'px');b.style.setProperty('--y',y+'px');b.style.setProperty('--h',h+'px');b.style.setProperty('--w',w+'px');
    b.style.setProperty('--delay',(-i*.12)+'s');layer.appendChild(b);
  }
  // Keep selected/known places visually anchored to their actual map coordinates.
  const chosen=places.filter(p=>activeType==='all'||p.type===activeType).slice(0,7);
  chosen.forEach((p,i)=>{
    const pt=map.latLngToContainerPoint([p.lat,p.lng]);
    if(pt.x<0||pt.x>size.x||pt.y<0||pt.y>size.y)return;
    const b=document.createElement('div');b.className='city-building place-building';
    const h=32+(i*13)%62,w=18+(i*9)%30;
    b.style.setProperty('--x',pt.x+'px');b.style.setProperty('--y',pt.y+'px');b.style.setProperty('--h',h+'px');b.style.setProperty('--w',w+'px');
    b.style.setProperty('--delay',(-i*.3)+'s');b.title=p.name;layer.appendChild(b);
  });
  const road=$('roadFx');
  if(road){
    road.innerHTML='';
    if(wrap.classList.contains('hyper3d')){
      for(let i=0;i<6;i++){
        const line=document.createElement('i');line.className='road-glow';
        line.style.top=(18+i*15)+'%';line.style.transform=`rotate(${i%2?-3:2}deg)`;line.style.animationDelay=(-i*.45)+'s';road.appendChild(line);
      }
    }
  }
}

function updateFps(){
  const el=$("fpsReadout"); if(!el)return;
  const t=performance.now(); window._fpsFrames=(window._fpsFrames||0)+1;
  if(!window._fpsLast)window._fpsLast=t;
  if(t-window._fpsLast>1000){el.textContent=Math.min(60,Math.round(window._fpsFrames*1000/(t-window._fpsLast)))+' FPS';window._fpsFrames=0;window._fpsLast=t;}
  if(!document.body.classList.contains('low-motion'))requestAnimationFrame(updateFps);
}

function selectPlace(p,fly=true){activePlace=p;$("selectedName").textContent=p.name;$("selectedRating").textContent=p.rating;$("selectedDesc").textContent=p.desc;$("selectedImg").src=p.img;$("selectedCard").style.display="block";updateSaveButton();if(fly){map.flyTo([p.lat,p.lng],16,{duration:.9});toast(`Exploring ${p.name}`)}}
function updateSaveButton(){const yes=saved.has(activePlace.name);$("saveDetail").textContent=yes?"♥ Saved":"♡ Save Place";$("saveDetail").classList.toggle("saved",yes)}
function fitAllPlaces(){render("all");map.fitBounds(L.latLngBounds(places.map(p=>[p.lat,p.lng])),{padding:[70,90],maxZoom:14});toast(`Showing all ${places.length} MapX places`)}
function renderPopular(){const box=$("popularCards");box.innerHTML="";places.slice(0,8).forEach(p=>{const el=document.createElement("button");el.className="place-card";el.innerHTML=`<b>${emoji[p.type]||"◆"} ${p.name}</b><small>${p.desc} · ${p.rating}</small>`;el.onclick=()=>selectPlace(p);box.appendChild(el)})}
function refresh(){
  const z=map.getZoom();
  addCharacters();
  renderCityFx();
  $("zoomReadout").textContent="Z"+z;
  updateMapHud();
  document.body.classList.toggle("map-detail-low",z<11);
  document.body.classList.toggle("map-detail-high",z>=15);
  if(typeof refreshSmartClusters==="function")refreshSmartClusters();
}
let refreshQueued=false;
function scheduleRefresh(){if(refreshQueued)return;refreshQueued=true;requestAnimationFrame(()=>{refreshQueued=false;refresh()})}
function updateMapHud(){const c=map.getCenter();const z=map.getZoom();const coord=$("coordReadout");const scale=$("scaleReadout");if(coord)coord.textContent=`${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}`;if(scale)scale.textContent=z>=16?"STREET VIEW":z>=14?"CITY VIEW":"REGION VIEW"}
function resetMap(){map.flyTo([11.0168,76.9558],13,{duration:.7});render("all");document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));const all=document.querySelector('.cat[data-type="all"]');if(all)all.classList.add("active");toast("Map reset to Coimbatore core")}
function toggleFullMap(){const w=$("mapWrap");if(!document.fullscreenElement){if(w.requestFullscreen)w.requestFullscreen().catch(()=>toast("Fullscreen is unavailable"));else toast("Fullscreen is unavailable")}else if(document.exitFullscreen)document.exitFullscreen()}
function switchLayer(layer,name){if(currentLayer!==layer){map.removeLayer(currentLayer);layer.addTo(map);currentLayer=layer}toast(`${name} view active`)}
function activate3D(){ $("mapWrap").classList.add("hyper3d");refresh();toast("Hyper 3D activated") }
function drawRoute(){clearRoute(false);const pts=[L.latLng(11.0168,76.9558),L.latLng(11.020,76.962),L.latLng(11.0183,76.9700)];routeLines.push(L.polyline(pts,{color:"#8c3cff",weight:12,opacity:.22}).addTo(map));routeLines.push(L.polyline(pts,{color:"#32dcff",weight:4,dashArray:"8 10",opacity:1}).addTo(map));const fx=$("routeFx");fx.innerHTML="";for(let i=0;i<pts.length-1;i++){const a=map.latLngToContainerPoint(pts[i]),b=map.latLngToContainerPoint(pts[i+1]);const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy),beam=document.createElement("div");beam.className="route-beam";beam.style.left=a.x+"px";beam.style.top=a.y+"px";beam.style.width=len+"px";beam.style.transform=`rotate(${Math.atan2(dy,dx)}rad)`;beam.style.animationDelay=(-i*.3)+"s";fx.appendChild(beam)}map.fitBounds(L.latLngBounds(pts),{padding:[90,90],duration:.8});$("routePanel").querySelector(".status").textContent="ACTIVE";toast("Glowing 3D route created")}
function clearRoute(show=true){routeLines.forEach(x=>map.removeLayer(x));routeLines=[];$("routeFx").innerHTML="";$("routePanel").querySelector(".status").textContent="READY";if(show)toast("Route cleared")}
function measureMode(){measurePoints=[];measureMarkers.forEach(m=>map.removeLayer(m));measureMarkers=[];toast("Measure mode: click two points on the map");map.once("click",e=>{measurePoints.push(e.latlng);measureMarkers.push(L.circleMarker(e.latlng,{radius:7,color:"#ff4fd1",fillOpacity:1}).addTo(map));toast("First point set — click the second point") ;map.once("click",e2=>{measurePoints.push(e2.latlng);measureMarkers.push(L.circleMarker(e2.latlng,{radius:7,color:"#29e6ff",fillOpacity:1}).addTo(map));const km=map.distance(e.latlng,e2.latlng)/1000;L.polyline(measurePoints,{color:"#ff4fd1",weight:3,dashArray:"6 8"}).addTo(map);toast(`Distance: ${km.toFixed(2)} km`)})})}

function liveType(item){
  const a=((item.type||"")+" "+(item.category||"")).toLowerCase();
  if(/restaurant|cafe|fast_food|food/.test(a)) return "restaurant";
  if(/hotel|guest_house|hostel/.test(a)) return "hotel";
  if(/hospital|clinic|doctors|pharmacy/.test(a)) return "hospital";
  if(/college|university|school|education/.test(a)) return "college";
  if(/park|garden|nature_reserve|playground/.test(a)) return "park";
  if(/mall|shop|commercial|market/.test(a)) return "shopping";
  return "shopping";
}
function clearLiveSearchMarkers(){liveMarkers.forEach(m=>map.removeLayer(m));liveMarkers=[];}
function addLivePlace(item){
  const display=item.display_name||item.name||"Real place";
  const p={name:item.name||display.split(',')[0],type:liveType(item),lat:Number(item.lat),lng:Number(item.lon),rating:"LIVE",desc:`OpenStreetMap place · ${display.split(',').slice(1,3).join(',').trim()||"Location"}`,img:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=700&q=80",live:true};
  const m=L.marker([p.lat,p.lng],{icon:icon(p.type)}).addTo(map);
  m.bindTooltip(`<b>${escapeHtml(p.name)}</b><br>${escapeHtml(p.desc)}`,{direction:"top",offset:[0,-30]});
  m.on("click",()=>selectPlace(p));
  liveMarkers.push(m); livePlaces=[p];
  map.flyTo([p.lat,p.lng],16,{duration:.8});
  selectPlace(p,false);
  toast(`Real place found: ${p.name}`);
  return p;
}
async function searchRealPlaces(q){
  q=(q||"").trim();
  if(q.length<2){toast("Type at least 2 characters");return;}
  const box=$("results");
  box.innerHTML='<div class="live-result">🌐 Searching real places…</div>';
  box.style.display="block";
  const providers=[
    async()=>{
      const url=`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&addressdetails=1&accept-language=en&q=${encodeURIComponent(q)}`;
      const res=await fetch(url,{headers:{"Accept":"application/json"}});
      if(!res.ok)throw new Error("Nominatim HTTP "+res.status);
      const data=await res.json();
      return data.map(item=>({name:item.display_name?.split(",")[0]||"Place",display_name:item.display_name||q,lat:Number(item.lat),lon:Number(item.lon),type:item.type||"place",category:item.category||"place"}));
    },
    async()=>{
      const url=`https://photon.komoot.io/api/?limit=6&lang=en&q=${encodeURIComponent(q)}`;
      const res=await fetch(url);
      if(!res.ok)throw new Error("Photon HTTP "+res.status);
      const json=await res.json();
      return (json.features||[]).map(f=>{const c=f.geometry?.coordinates||[];const pr=f.properties||{};const label=[pr.name,pr.street,pr.city,pr.state,pr.country].filter(Boolean).join(", ");return {name:pr.name||"Place",display_name:label||q,lat:Number(c[1]),lon:Number(c[0]),type:pr.type||"place",category:pr.osm_value||pr.type||"place"};});
    }
  ];
  let data=[];
  for(const provider of providers){try{data=await Promise.race([provider(),new Promise((_,reject)=>setTimeout(()=>reject(new Error("timeout")),5000))]);if(data.length)break;}catch(e){}}
  if(!data.length){
    const fallback=fallbackSearch(q);
    if(fallback.length){
      data=fallback.map(p=>({...p,lat:p.lat,lon:p.lng,display_name:p.desc,type:p.type,category:p.type}));
      toast("Live search unavailable — showing built-in real places");
    }
  }
  if(!data.length){box.innerHTML='<div class="live-result">No place found. Try “Brookefields”, “Ganga Hospital”, “VOC Park”, or “PSG”.</div>';toast("No real place found");return;}
  showSearchResults(data,box);
}

function escapeHtml(s){s=String(s??"");return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function aiAnswer(q){const s=q.toLowerCase();if(/restaurant|food|eat|cafe/.test(s)){render("restaurant");return"Food mode activated. I found the nearby restaurants and placed 3D explorers beside them."}if(/hospital|health|medical/.test(s)){render("hospital");return"Health mode activated. Hospital locations are highlighted."}if(/park|nature/.test(s)){render("park");return"Nature mode activated. Park locations are highlighted."}if(/hotel|stay/.test(s)){render("hotel");return"Hotel mode activated. Nearby hotels are displayed."}if(/college|university|education/.test(s)){render("college");return"Education mode activated. College locations are displayed."}if(/mall|shop|shopping/.test(s)){render("shopping");selectPlace(places[1]);return"Shopping mode activated. I focused the mall in Hyper Map view."}if(/route|direction|navigate/.test(s)){drawRoute();return"I created a glowing route to Brookefields Mall."}if(/3d|three d|cartoon|character|hyper/.test(s)){activate3D();return"Hyper 3D is active. The animated explorer characters now follow the map."}if(/nearby|near me|around/.test(s)){fitAllPlaces();return"Nearby scan complete. I expanded the map and showed the explorer team."}if(/save/.test(s)){saved.add(activePlace.name);updateSaveButton();renderSaved();return`${activePlace.name} has been saved to your MapX collection.`}if(/weather/.test(s)){$("weather").scrollIntoView({behavior:"smooth",block:"center"});return"Live weather panel is already available on the map."}return"I can search categories, build routes, measure distance, save places, control Hyper 3D, and move the map. Try: ‘show restaurants’, ‘activate 3D’, or ‘route to mall’."}
function sendAI(){const q=$("aiInput").value.trim();if(!q)return;$("aiBox").classList.add("thinking");$("aiStatus").textContent="THINKING";setTimeout(()=>{$("aiMsg").innerHTML=`<b>You:</b> ${escapeHtml(q)}<br><br><b>MapX AI:</b> ${aiAnswer(q)}`;$("aiInput").value="";$("aiBox").classList.remove("thinking");$("aiStatus").textContent="ONLINE"},450)}
function renderSaved(){const box=$("savedList");box.innerHTML="";if(!saved.size){box.innerHTML='<div class="saved-list-row">No saved places yet <span>♡</span></div>';return}saved.forEach(name=>{const p=places.find(x=>x.name===name);const row=document.createElement("div");row.className="saved-list-row";row.innerHTML=`<span>${emoji[p.type]||"◆"} ${name}</span><span>♥</span>`;row.onclick=()=>selectPlace(p);box.appendChild(row)})}
render("all");selectPlace(places[0],false);map.fitBounds(L.latLngBounds(places.map(p=>[p.lat,p.lng])),{padding:[70,90],maxZoom:14});
map.on("move zoom",scheduleRefresh);map.on("zoomend",()=>render(activeType));map.on("zoomend",()=>{$("zoomReadout").textContent="Z"+map.getZoom();updateMapHud()});

document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.type);pulse($("popularPanel"))});
function changeZoom(delta){const next=Math.max(map.getMinZoom(),Math.min(map.getMaxZoom(),map.getZoom()+delta));map.setZoom(next,{animate:true});toast(`Map zoom: ${next}`)}
["zoomIn","zoomOut"].forEach((id,i)=>{const el=$(id);el.addEventListener("pointerdown",e=>{e.preventDefault();e.stopPropagation();changeZoom(i===0?1:-1)});el.addEventListener("click",e=>{e.preventDefault();e.stopPropagation()})});
let userLocationMarker=null;
let userLocationAccuracy=null;

function showUserLocation(position, fly=true){
  const {latitude, longitude, accuracy} = position.coords;
  const latlng=[latitude, longitude];

  if(userLocationMarker) map.removeLayer(userLocationMarker);
  if(userLocationAccuracy) map.removeLayer(userLocationAccuracy);

  userLocationAccuracy=L.circle(latlng,{
    radius:Math.min(Math.max(accuracy||40,20),500),
    color:"#29e6ff",
    weight:2,
    opacity:.75,
    fillColor:"#29e6ff",
    fillOpacity:.10,
    interactive:false
  }).addTo(map);

  userLocationMarker=L.circleMarker(latlng,{
    radius:10,
    color:"#ffffff",
    weight:3,
    fillColor:"#7c3cff",
    fillOpacity:1,
    interactive:false
  }).addTo(map);

  userLocationMarker.bindTooltip("You are here",{direction:"top",offset:[0,-10]});

  if(fly){
    map.flyTo(latlng,Math.max(map.getZoom(),16),{duration:.65,easeLinearity:.25});
  }
  toast(`Location found · ±${Math.round(accuracy||0)}m`);
}

function locateUser(){
  if(!navigator.geolocation){toast("Geolocation is not available in this browser");return;}
  const button=$("locateMap");
  if(button){button.disabled=true;button.classList.add("locating");}
  toast("📍 Finding your location…");
  const done=()=>{if(button){button.disabled=false;button.classList.remove("locating")}};
  const success=position=>{showUserLocation(position,true);done();};
  const fail=error=>{
    console.warn("Geolocation:",error);
    if(error.code===1){done();toast("Allow location permission in your browser, then try again.");return;}
    navigator.geolocation.getCurrentPosition(success,()=>{done();toast("Location is taking too long. Turn on device location/GPS and try again.")},{enableHighAccuracy:false,timeout:5000,maximumAge:120000});
  };
  navigator.geolocation.getCurrentPosition(success,fail,{enableHighAccuracy:true,timeout:7000,maximumAge:30000});
}

$("locateMap").onclick=locateUser;$("resetMap").onclick=resetMap;$("fullMap").onclick=toggleFullMap;document.addEventListener("fullscreenchange",()=>scheduleRefresh());
$("tiltBtn").onclick=()=>{const w=$("mapWrap");w.classList.toggle("depth-mode");w.classList.toggle("depth");refresh();toast(w.classList.contains("depth-mode")?"Depth camera ON":"Depth camera OFF")};$("threeD").onclick=()=>{$("mapWrap").classList.toggle("hyper3d");renderCityFx();refresh();toast($("mapWrap").classList.contains("hyper3d")?"Hyper 3D ON — city depth loaded":"Hyper 3D OFF")};$("mapMode").onclick=()=>switchLayer(mapLayer,"Map");$("terrainMode").onclick=()=>switchLayer(terrainLayer,"Terrain");
$("closeCard").onclick=()=>$("selectedCard").style.display="none";$("saveDetail").onclick=()=>{saved.has(activePlace.name)?saved.delete(activePlace.name):saved.add(activePlace.name);updateSaveButton();renderSaved();toast(saved.has(activePlace.name)?"Place saved":"Place removed")};$("details").onclick=()=>{pulse($("selectedCard"));toast(`${activePlace.name} · ${activePlace.desc} · ${activePlace.rating}`)};
$("routeBtn").onclick=()=>{$("routePanel").scrollIntoView({behavior:"smooth",block:"center"});pulse($("routePanel"))};$("getDirections").onclick=drawRoute;$("clearRoute").onclick=()=>clearRoute();$("measure").onclick=measureMode;
$("addPlace").onclick=()=>{toast("Click the map to place a custom marker");map.once("click",e=>{const m=L.marker(e.latlng,{icon:icon("all")}).addTo(map);m.bindPopup("<b>Custom MapX Place</b><br>Added interactively.").openPopup();toast("Custom place added")})};$("share").onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast("Map link copied")}catch{toast("Share link: copy the page URL from your browser")}};
$("search").oninput=()=>{const q=$("search").value.trim().toLowerCase(),box=$("results");box.innerHTML="";if(!q){box.style.display="none";return}places.filter(p=>`${p.name} ${p.type}`.toLowerCase().includes(q)).slice(0,6).forEach(p=>{const d=document.createElement("div");d.textContent=`${emoji[p.type]||"◆"} ${p.name} — ${p.desc}`;d.onclick=()=>{selectPlace(p);$("search").value=p.name;box.style.display="none"};box.appendChild(d)});const live=document.createElement("div");live.className="live-result search-live-trigger";live.textContent="🌐 Search real places";live.onclick=()=>searchRealPlaces($("search").value.trim());box.appendChild(live);box.style.display="block"};$("searchBtn").onclick=()=>{const raw=$("search").value.trim(),q=raw.toLowerCase(),p=places.find(x=>`${x.name} ${x.type}`.toLowerCase().includes(q));p?selectPlace(p):searchRealPlaces(raw)}; $("search").addEventListener("keydown",e=>{if(e.key==="Enter"){const raw=e.currentTarget.value.trim(),q=raw.toLowerCase(),local=places.find(x=>`${x.name} ${x.type}`.toLowerCase().includes(q));if(!raw)return;local?selectPlace(local):searchRealPlaces(raw)}});
$("sendAI").onclick=sendAI;$("aiInput").onkeydown=e=>{if(e.key==="Enter")sendAI()};document.querySelectorAll(".quick button").forEach(b=>b.onclick=()=>{$("aiInput").value=b.textContent;sendAI()});$("aiNav").onclick=()=>{$("aiBox").scrollIntoView({behavior:"smooth",block:"center"});pulse($("aiBox"))};$("closeAI").onclick=()=>$("aiBox").classList.toggle("minimized");
$("menuBtn").onclick=()=>$("sidebar").classList.toggle("open");$("theme").onclick=()=>{document.body.classList.toggle("light-mode");toast(document.body.classList.contains("light-mode")?"Light theme ON":"Dark theme ON")};$("bell").onclick=()=>toast("MapX: 3 new exploration notifications");$("profileBtn").onclick=()=>toast("Profile: Sridhar S");$("premiumBtn").onclick=activate3D;$("galleryBtn").onclick=activate3D;
$("viewAll").onclick=fitAllPlaces;$("clearRecent").onclick=()=>{document.querySelectorAll("#recentPanel p").forEach(x=>x.remove());toast("Recent searches cleared")};$("clearSaved").onclick=()=>{saved.clear();renderSaved();updateSaveButton();toast("Saved places cleared")};
document.querySelectorAll(".transport button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".transport button").forEach(x=>x.classList.remove("active"));b.classList.add("active");toast(`Travel mode: ${b.textContent}`)});
const scanNearbyBtn=$("scanNearby");if(scanNearbyBtn)scanNearbyBtn.onclick=scanNearby;document.querySelectorAll(".nearby-filter").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".nearby-filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");nearbyCategory=btn.dataset.nearby;if(nearbyPlaces.length)scanNearby()});
document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");const n=btn.dataset.nav;const targets={categories:"categories",saved:"savedPanel",routes:"routePanel",traffic:"trafficPanel",weather:"weather",gallery:"galleryPanel",settings:"settingsPanel",ai:"aiBox"};if(n==="explore"){$("mapWrap").scrollIntoView({behavior:"smooth",block:"center"})}else if(n==="nearby"){const panel=$("nearbyPanel");if(panel){panel.scrollIntoView({behavior:"smooth",block:"center"});pulse(panel);setTimeout(scanNearby,500)}else{toast("Nearby Explorer panel is not available in this build")}}else if(targets[n]){$(targets[n]).scrollIntoView({behavior:"smooth",block:"center"});pulse($(targets[n]))}if(innerWidth<900)$('sidebar').classList.remove("open")});
$("particlesToggle").onchange=()=>document.body.classList.toggle("hide-particles",!$("particlesToggle").checked);$("charToggle").onchange=refresh;$("motionToggle").onchange=()=>{document.body.classList.toggle("low-motion",$("motionToggle").checked);if(!$('motionToggle').checked)requestAnimationFrame(updateFps);toast($("motionToggle").checked?"Low motion enabled":"Full motion enabled")};
function pulse(el){if(!el)return;el.classList.remove("pulse");void el.offsetWidth;el.classList.add("pulse")}
for(let i=0;i<65;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.animationDuration=7+Math.random()*11+"s";p.style.animationDelay=-Math.random()*14+"s";p.style.opacity=.2+Math.random()*.7;$("particles").appendChild(p)}

/* ===== ADAPTIVE MAP INTELLIGENCE ===== */
function refreshSmartClusters(){
  const z=map.getZoom();
  if(z<=11 && activeType==="all"){
    const expected=places.filter(p=>p.type==="all").length;
    const hud=document.getElementById("mapDensityReadout");
    if(hud)hud.textContent=`SMART CLUSTERS · ${expected} PLACES`;
  }else{
    const hud=document.getElementById("mapDensityReadout");
    if(hud)hud.textContent=z>=15?"STREET DETAIL · HIGH":z>=13?"CITY DETAIL · BALANCED":"REGION DETAIL · SMART";
  }
}
function addMapIntelligence(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("mapIntelligence"))return;
  const panel=document.createElement("div");panel.id="mapIntelligence";panel.className="map-intelligence";panel.innerHTML=`
    <div class="mi-head"><span class="mi-pulse"></span><b>MAP INTELLIGENCE</b><small id="mapDensityReadout">CITY DETAIL · BALANCED</small></div>
    <div class="mi-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="mi-actions"><button id="miCinematic">✦ Cinematic</button><button id="miFocus">◎ Center</button></div>`;
  wrap.appendChild(panel);
  $("miCinematic").onclick=()=>{wrap.classList.toggle("cinematic-map");toast(wrap.classList.contains("cinematic-map")?"Cinematic map mode ON":"Cinematic map mode OFF")};
  $("miFocus").onclick=()=>{const c=map.getCenter();map.flyTo(c,Math.max(14,map.getZoom()),{duration:.55});toast("Map centered")};
}
addMapIntelligence();
window.addEventListener("resize",scheduleRefresh);map.on("move zoom",scheduleRefresh);renderCityFx();updateMapHud();requestAnimationFrame(updateFps);setTimeout(()=>toast("MapX AI + 3D explorer core online · Live place search ready"),900);

/* ===== SMART NAVIGATION CORE ===== */
(function smartNavigation(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("navCockpit"))return;
  const cockpit=document.createElement("div");
  cockpit.id="navCockpit";cockpit.className="nav-cockpit";cockpit.innerHTML=`
    <div class="nc-head"><i class="nc-dot" id="gpsDot"></i><span class="nc-title">SMART NAVIGATION</span></div>
    <div class="nc-grid">
      <div class="nc-stat"><small>GPS</small><b id="ncGps">WAITING</b></div>
      <div class="nc-stat"><small>ZOOM</small><b id="ncZoom">Z—</b></div>
      <div class="nc-stat"><small>POSITION</small><b id="ncPos">MAP VIEW</b></div>
      <div class="nc-stat"><small>CAMERA</small><b id="ncCam">FLAT</b></div>
    </div>
    <div class="nc-actions"><button id="ncFollow">◎ Follow</button><button id="ncFocus">⌖ Focus</button></div>
    <div class="nc-actions"><button id="ncCity">🏙 3D City</button><button id="ncRoads">〰 Roads</button></div>
    <div class="nc-hint">Live GPS follows your device only when enabled.</div>`;
  wrap.appendChild(cockpit);
  const ring=document.createElement("div");ring.className="map-follow-ring";ring.hidden=true;wrap.appendChild(ring);
  let follow=false,watchId=null,lastPos=null;
  const gpsDot=$("gpsDot"),gpsText=$("ncGps"),zoomText=$("ncZoom"),posText=$("ncPos"),camText=$("ncCam"),followBtn=$("ncFollow"),focusBtn=$("ncFocus"),cityBtn=$("ncCity"),roadsBtn=$("ncRoads");
  function updateCockpit(){
    zoomText.textContent="Z"+map.getZoom().toFixed(1);
    const c=map.getCenter();
    if(!lastPos)posText.textContent=`${c.lat.toFixed(3)}, ${c.lng.toFixed(3)}`;
    const hyper=wrap.classList.contains("hyper3d")||wrap.classList.contains("depth-mode");
    camText.textContent=hyper?(wrap.classList.contains("hyper3d")?"HYPER 3D":"DEPTH"):"FLAT";
  }
  function stopWatch(){if(watchId!==null&&navigator.geolocation){navigator.geolocation.clearWatch(watchId);watchId=null}}
  function startWatch(){
    if(!navigator.geolocation){gpsText.textContent="UNAVAILABLE";toast("GPS is not available in this browser");return}
    if(watchId!==null)return;
    gpsText.textContent="SEARCHING";gpsDot.classList.remove("live");
    watchId=navigator.geolocation.watchPosition(p=>{
      lastPos=p;gpsText.textContent=`±${Math.round(p.coords.accuracy||0)}m`;gpsDot.classList.add("live");
      posText.textContent=`${p.coords.latitude.toFixed(3)}, ${p.coords.longitude.toFixed(3)}`;
      showUserLocation(p,false);
      if(follow){map.flyTo([p.coords.latitude,p.coords.longitude],Math.max(map.getZoom(),16),{duration:.45});}
    },e=>{gpsText.textContent=e.code===1?"DENIED":"RETRY";gpsDot.classList.remove("live")},{enableHighAccuracy:true,maximumAge:10000,timeout:10000});
  }
  followBtn.onclick=()=>{
    follow=!follow;followBtn.classList.toggle("active",follow);ring.hidden=!follow;
    if(follow){startWatch();if(lastPos)map.flyTo([lastPos.coords.latitude,lastPos.coords.longitude],Math.max(map.getZoom(),16),{duration:.55});toast("Follow mode ON")}
    else{stopWatch();toast("Follow mode OFF")}
  };
  focusBtn.onclick=()=>{if(lastPos){map.flyTo([lastPos.coords.latitude,lastPos.coords.longitude],Math.max(map.getZoom(),16),{duration:.6});toast("Focused on your location")}else locateUser()};
  cityBtn.onclick=()=>{wrap.classList.toggle('hyper3d');cityBtn.classList.toggle('active',wrap.classList.contains('hyper3d'));renderCityFx();refresh();toast(wrap.classList.contains('hyper3d')?'Schematic 3D city overlay ON':'3D city overlay OFF')};
  roadsBtn.onclick=()=>{wrap.classList.toggle('road-glow-on');roadsBtn.classList.toggle('active',wrap.classList.contains('road-glow-on'));const road=$('roadFx');if(road)road.classList.toggle('visible',wrap.classList.contains('road-glow-on'));toast(wrap.classList.contains('road-glow-on')?'Navigation road glow ON':'Navigation road glow OFF')};
  map.on("zoomend moveend",updateCockpit);updateCockpit();
  const originalShow=showUserLocation;
  window.showUserLocation=function(position,fly=true){originalShow(position,fly);lastPos=position;gpsText.textContent=`±${Math.round(position.coords.accuracy||0)}m`;gpsDot.classList.add("live");posText.textContent=`${position.coords.latitude.toFixed(3)}, ${position.coords.longitude.toFixed(3)}`;updateCockpit()};
  const originalRoute=drawRoute;
  if(typeof originalRoute==="function"){
    window.drawRoute=function(){originalRoute();setTimeout(()=>document.querySelectorAll("path.leaflet-interactive").forEach(p=>p.classList.add("route-animated")),120)};
  }
  window.addEventListener("beforeunload",stopWatch);
})();

/* ===== NEXT STAGE: TURN-BY-TURN GUIDANCE EXPERIENCE ===== */
(function navigationGuidance(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("navGuidance"))return;
  const panel=document.createElement("div");
  panel.id="navGuidance";panel.className="nav-guidance";panel.hidden=true;
  panel.innerHTML=`
    <div class="ng-top"><div class="ng-turn" id="ngTurn">➜</div><div class="ng-main"><b id="ngInstruction">Ready for navigation</b><small id="ngSub">Select Get Directions to start.</small></div><button id="ngClose" class="icon-btn" aria-label="Close guidance">×</button></div>
    <div class="ng-metrics"><span>ETA <strong id="ngEta">—</strong></span><span>DIST <strong id="ngDist">—</strong></span><span>MODE <strong id="ngMode">DRIVE</strong></span></div>
    <div class="route-stepper" id="ngSteps"></div>
    <div class="ng-actions"><button id="ngPrev">‹ Previous</button><button id="ngNext" class="active">Next ›</button><button id="ngStop">■ Stop</button></div>`;
  wrap.appendChild(panel);

  const steps=[
    {icon:"➜",title:"Head toward Avinashi Road",sub:"Continue straight",dist:"650 m",eta:"2 min"},
    {icon:"↗",title:"Keep right at the junction",sub:"Follow the main road",dist:"1.1 km",eta:"3 min"},
    {icon:"↰",title:"Turn left toward Brookefields",sub:"Destination area ahead",dist:"850 m",eta:"2 min"},
    {icon:"⌖",title:"Arrive at Brookefields Mall",sub:"Destination reached",dist:"0 m",eta:"0 min"}
  ];
  let index=0,navMode="DRIVE";
  const el=id=>$(id);
  function renderStep(){
    const s=steps[index];el("ngTurn").textContent=s.icon;el("ngInstruction").textContent=s.title;el("ngSub").textContent=s.sub;el("ngDist").textContent=s.dist;el("ngEta").textContent=s.eta;el("ngMode").textContent=navMode;
    const box=el("ngSteps");box.innerHTML="";
    steps.forEach((x,i)=>{const b=document.createElement("button");b.textContent=`${i+1}. ${x.dist}`;b.className=i===index?"active":"";b.onclick=()=>{index=i;renderStep();focusRouteStep(i)};box.appendChild(b)});
  }
  function focusRouteStep(i){
    const pts=[L.latLng(11.0168,76.9558),L.latLng(11.020,76.962),L.latLng(11.0183,76.9700)];
    const p=pts[Math.min(i,pts.length-1)];map.flyTo(p,Math.max(map.getZoom(),15),{duration:.5});
  }
  function start(){panel.hidden=false;index=0;renderStep();toast("Turn-by-turn guidance started");}
  function stop(){panel.hidden=true;toast("Navigation guidance stopped");}
  el("ngNext").onclick=()=>{if(index<steps.length-1){index++;renderStep();focusRouteStep(index)}else toast("You have reached the destination")};
  el("ngPrev").onclick=()=>{if(index>0){index--;renderStep();focusRouteStep(index)}};
  el("ngStop").onclick=stop;el("ngClose").onclick=stop;
  document.querySelectorAll(".transport button").forEach(b=>b.addEventListener("click",()=>{navMode=b.textContent.includes("🚶")?"WALK":b.textContent.includes("🚲")?"BIKE":"DRIVE";if(!panel.hidden)renderStep()}));
  const oldDraw=window.drawRoute||drawRoute;
  window.drawRoute=function(){oldDraw();start();};
  const getBtn=$("getDirections");if(getBtn)getBtn.onclick=window.drawRoute;
})();

/* ===== NEXT STAGE: REAL-TIME NAVIGATION EXPERIENCE ===== */
(function navigationExperience(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("navProgressPanel"))return;
  const panel=document.createElement("div");panel.id="navProgressPanel";panel.className="nav-progress";panel.hidden=true;
  panel.innerHTML=`<div class="np-head"><b>LIVE NAVIGATION</b><span class="np-status" id="navProgressStatus">READY</span></div><div class="np-bar"><div class="np-fill" id="navProgressFill"></div></div><div class="np-row"><span>PROGRESS</span><strong id="navProgressText">0%</strong></div><div class="np-row"><span>EST. ARRIVAL</span><strong id="navArrivalTime">—</strong></div><div class="np-actions"><button id="navPlay">▶ Start</button><button id="navPause">Ⅱ Pause</button><button id="navFinish">⌖ Arrive</button></div>`;
  wrap.appendChild(panel);
  const arrival=document.createElement("div");arrival.id="navArrival";arrival.className="nav-arrival";arrival.hidden=true;arrival.innerHTML=`<div class="arrival-icon">🎯</div><h3>Destination Reached</h3><p id="arrivalPlace">Brookefields Mall</p><button id="arrivalClose">Continue Exploring</button>`;wrap.appendChild(arrival);
  let vehicle=null,timer=null,running=false,progress=0;
  const pts=[L.latLng(11.0168,76.9558),L.latLng(11.020,76.962),L.latLng(11.0183,76.9700)];
  function vehicleIcon(){return L.divIcon({className:"nav-vehicle-icon",html:`<div class="nav-vehicle">➤</div>`,iconSize:[28,28],iconAnchor:[14,14]})}
  function ensureVehicle(){if(!vehicle)vehicle=L.marker(pts[0],{icon:vehicleIcon(),zIndexOffset:900}).addTo(map);}
  function pointAt(t){const total=pts.length-1;const scaled=Math.min(0.9999,Math.max(0,t))*total;const i=Math.min(pts.length-2,Math.floor(scaled));const f=scaled-i;const a=pts[i],b=pts[i+1];return L.latLng(a.lat+(b.lat-a.lat)*f,a.lng+(b.lng-a.lng)*f)}
  function update(){const pct=Math.round(progress*100);$("navProgressFill").style.width=pct+"%";$("navProgressText").textContent=pct+"%";const mins=Math.max(0,Math.ceil((1-progress)*9));$("navArrivalTime").textContent=mins?mins+" min":"NOW";ensureVehicle();vehicle.setLatLng(pointAt(progress));if(progress>=1){running=false;clearInterval(timer);$("navProgressStatus").textContent="ARRIVED";arrival.hidden=false;wrap.classList.remove("nav-wrap-running");return true}return false}
  function start(){panel.hidden=false;arrival.hidden=true;ensureVehicle();if(progress>=1)progress=0;running=true;$("navProgressStatus").textContent="NAVIGATING";wrap.classList.add("nav-wrap-running");update();clearInterval(timer);timer=setInterval(()=>{progress=Math.min(1,progress+.025);update()},700);toast("Live navigation simulation started")}
  function pause(){running=false;clearInterval(timer);$("navProgressStatus").textContent="PAUSED";wrap.classList.remove("nav-wrap-running");toast("Navigation paused")}
  function finish(){progress=1;update();toast("Destination reached")}
  function closeArrival(){arrival.hidden=true;panel.hidden=false;progress=1;update()}
  $("navPlay").onclick=start;$("navPause").onclick=pause;$("navFinish").onclick=finish;$("arrivalClose").onclick=closeArrival;
  const oldGuidance=window.drawRoute||drawRoute;
  window.drawRoute=function(){oldGuidance();panel.hidden=false;progress=0;update();};
  window.addEventListener("beforeunload",()=>clearInterval(timer));
})();

/* ===== NEXT STAGE: DESTINATION / SEARCH EXPERIENCE ===== */
(function destinationExperience(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("destinationShell"))return;
  const launch=document.createElement("button");launch.id="destinationLaunch";launch.className="destination-launch";launch.textContent="⌖ Choose Destination";wrap.appendChild(launch);
  const shell=document.createElement("div");shell.id="destinationShell";shell.className="destination-shell";shell.hidden=true;
  shell.innerHTML=`<div class="destination-card"><div class="destination-head"><div><h3>Destination Center</h3><small style="color:#8fa8ba">Choose a place and preview your trip</small></div><button class="destination-close" id="destinationClose" aria-label="Close">×</button></div><div class="destination-input"><input id="destinationQuery" placeholder="Search a destination..." autocomplete="off"><button id="destinationSearch">Search</button></div><div class="destination-section"><h4>RECENT DESTINATIONS</h4><div id="destinationRecent" class="destination-grid"></div></div><div class="destination-section"><h4>QUICK DESTINATIONS</h4><div id="destinationQuick" class="destination-grid"></div></div><div id="destinationPreview" class="destination-preview"><div class="dp-title"><b id="dpName">Destination</b><span id="dpType">PLACE</span></div><div class="dp-meta"><span class="dp-chip" id="dpDistance">~3.2 km</span><span class="dp-chip" id="dpTime">~9 min</span><span class="dp-chip" id="dpMode">🚗 Drive</span></div><p id="dpDesc" style="margin:0 0 12px;color:#a9bdca;font-size:13px">Preview route before starting navigation.</p><div class="dp-actions"><button id="dpPreview">Show Route</button><button id="dpStart" class="destination-start">Start Navigation</button></div></div></div>`;
  wrap.appendChild(shell);
  const quick=[
    {name:"Brookefields Mall",type:"Shopping",lat:11.0183,lng:76.9700,desc:"Popular shopping destination in Coimbatore.",distance:"~3.2 km",time:"~9 min"},
    {name:"Coimbatore Junction",type:"Transport",lat:11.0004,lng:76.9625,desc:"Major railway station and city transport hub.",distance:"~2.7 km",time:"~8 min"},
    {name:"VOC Park",type:"Park",lat:11.0104,lng:76.9554,desc:"Central city park and recreation area.",distance:"~2.0 km",time:"~6 min"},
    {name:"Gandhipuram",type:"City Center",lat:11.0183,lng:76.9674,desc:"Busy commercial and transit district.",distance:"~2.9 km",time:"~8 min"}
  ];
  let selected=null;
  const recent=[];
  function esc(s){return String(s).replace(/[&<>\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
  function open(){shell.hidden=false;renderRecent();$("destinationQuery").focus()}
  function close(){shell.hidden=true}
  function renderRecent(){const box=$("destinationRecent");if(!recent.length){box.innerHTML='<div class="destination-empty" style="grid-column:1/-1">No recent destinations yet. Choose one below.</div>';return}box.innerHTML=recent.map((p,i)=>`<button class="destination-item" data-recent="${i}"><strong>${esc(p.name)}</strong><span>${esc(p.type)} · ${esc(p.time)}</span></button>`).join("");box.querySelectorAll("[data-recent]").forEach(b=>b.onclick=()=>select(recent[Number(b.dataset.recent)]))}
  function renderQuick(){const box=$("destinationQuick");box.innerHTML=quick.map((p,i)=>`<button class="destination-item" data-quick="${i}"><strong>${esc(p.name)}</strong><span>${esc(p.type)} · ${esc(p.time)}</span></button>`).join("");box.querySelectorAll("[data-quick]").forEach(b=>b.onclick=()=>select(quick[Number(b.dataset.quick)]))}
  function select(p){selected=p;$("dpName").textContent=p.name;$("dpType").textContent=p.type.toUpperCase();$("dpDistance").textContent=p.distance||"Route preview";$("dpTime").textContent=p.time||"ETA estimate";$("dpDesc").textContent=p.desc||"Preview route before starting navigation.";$("destinationPreview").classList.add("show");if(!recent.some(x=>x.name===p.name)){recent.unshift(p);if(recent.length>4)recent.pop();renderRecent()};toast(`${p.name} selected`)}
  function search(){const q=$("destinationQuery").value.trim().toLowerCase();if(!q){toast("Enter a destination");return}const found=quick.find(p=>p.name.toLowerCase().includes(q)||p.type.toLowerCase().includes(q));if(found){select(found);return}if(typeof searchRealPlaces==="function"){searchRealPlaces(q).then(()=>toast("Search completed — select a place from the map results"));close()}else toast("No matching destination found")}
  function showRoute(){if(!selected)return;close();map.flyTo([selected.lat,selected.lng],15,{duration:.8});const destination=selected;window.__mapxDestination=destination;if(typeof drawRoute==="function")drawRoute();toast(`Route preview: ${destination.name}`)}
  function startNav(){if(!selected)return;close();map.flyTo([selected.lat,selected.lng],15,{duration:.8});window.__mapxDestination=selected;if(typeof drawRoute==="function")drawRoute();const panel=$("navProgressPanel");if(panel){const startBtn=$("navPlay");if(startBtn)startBtn.click()}toast(`Navigation started to ${selected.name}`)}
  launch.onclick=open;$("destinationClose").onclick=close;$("destinationSearch").onclick=search;$("destinationQuery").addEventListener("keydown",e=>{if(e.key==="Enter")search()});$("dpPreview").onclick=showRoute;$("dpStart").onclick=startNav;
  renderQuick();renderRecent();
})();

/* ===== NEXT STAGE: SMART NAVIGATION COMMAND CENTER ===== */
(function smartNavigationCommandCenter(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("navCommandCenter"))return;
  const panel=document.createElement("section");
  panel.id="navCommandCenter"; panel.className="nav-command-center"; panel.hidden=true;
  panel.innerHTML=`<div class="ncc-head"><b>SMART NAVIGATION</b><span class="ncc-live">● READY</span></div><div class="ncc-destination"><small>DESTINATION</small><strong id="nccDestination">Brookefields Mall</strong></div><div class="ncc-step"><div class="ncc-arrow" id="nccArrow">➜</div><div><b id="nccInstruction">Head toward Avinashi Road</b><span id="nccSub">Continue for 1.2 km</span></div></div><div class="ncc-meter"><i id="nccMeter"></i></div><div class="ncc-actions"><button id="nccPrev">‹ Back</button><button id="nccNext" class="active">Next ›</button><button id="nccReroute">↻ Reroute</button></div><div id="nccRerouteMsg" class="nav-reroute">Route recalculated using the current demo path.</div>`;
  wrap.appendChild(panel);
  const steps=[
    {icon:"➜",text:"Head toward Avinashi Road",sub:"Continue for 1.2 km"},
    {icon:"↗",text:"Keep right at the junction",sub:"Follow the main road"},
    {icon:"↰",text:"Turn left toward Brookefields",sub:"Continue for 650 m"},
    {icon:"◎",text:"Arrive at Brookefields Mall",sub:"Destination is ahead"}
  ];
  let index=0;
  function render(){
    const s=steps[index];
    $("nccArrow").textContent=s.icon; $("nccInstruction").textContent=s.text; $("nccSub").textContent=s.sub;
    $("nccDestination").textContent=(window.__mapxDestination&&window.__mapxDestination.name)||"Brookefields Mall";
    $("nccMeter").style.width=Math.round((index/(steps.length-1))*100)+"%";
  }
  function open(){panel.hidden=false;render()}
  function next(){if(index<steps.length-1){index++;render();toast("Next navigation instruction")}else toast("Destination reached")}
  function prev(){if(index>0){index--;render()}else toast("Already at the first step")}
  function reroute(){index=0;render();$("nccRerouteMsg").classList.add("show");toast("Route recalculated")}
  $("nccNext").onclick=next;$("nccPrev").onclick=prev;$("nccReroute").onclick=reroute;
  const oldDraw=window.drawRoute||drawRoute;
  window.drawRoute=function(){oldDraw();open()};
  const launch=$("destinationLaunch");if(launch)launch.addEventListener("click",()=>panel.hidden=true);
  window.addEventListener("mapx:navigation-start",open);
  document.addEventListener("click",e=>{if(e.target&&e.target.id==="navPlay")open()});
})();

/* ===== NEXT STAGE: ROUTE INTELLIGENCE EXPERIENCE ===== */
(function routeIntelligence(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("routeIntelShell"))return;
  const launch=document.createElement("button");
  launch.id="routeIntelLaunch"; launch.className="route-intel-launch"; launch.textContent="⌁ Route Options";
  wrap.appendChild(launch);
  const shell=document.createElement("div");
  shell.id="routeIntelShell"; shell.className="route-intel-shell"; shell.hidden=true;
  shell.innerHTML=`<div class="route-intel-card"><div class="ri-head"><div><h3>Route Intelligence</h3><small>Compare demo route options before navigation</small></div><button id="riClose" class="ri-close" aria-label="Close">×</button></div><div class="ri-trip"><div><small>FROM</small><strong>My Location</strong></div><div class="ri-arrow">→</div><div><small>TO</small><strong id="riDestination">Brookefields Mall</strong></div></div><div id="riOptions" class="ri-options"></div><div class="ri-footer"><span class="ri-note">Estimates are illustrative and not live traffic data.</span><button id="riStart" class="ri-start">Start Selected Route</button></div></div>`;
  wrap.appendChild(shell);
  const routes=[
    {id:"balanced",icon:"⚡",name:"Balanced Route",desc:"Good balance of time and distance",distance:"3.2 km",time:"9 min",tag:"RECOMMENDED"},
    {id:"quick",icon:"🏎️",name:"Quick Route",desc:"Prioritizes a shorter estimated trip",distance:"3.5 km",time:"8 min",tag:"FASTEST DEMO"},
    {id:"scenic",icon:"🌿",name:"Scenic Route",desc:"Longer path with a calmer route profile",distance:"4.4 km",time:"12 min",tag:"SCENIC"}
  ];
  let selected="balanced";
  function esc(v){return String(v).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]))}
  function render(){
    const box=$("riOptions");
    box.innerHTML=routes.map(r=>`<button class="ri-option ${r.id===selected?"active":""}" data-route="${r.id}"><span class="ri-icon">${r.icon}</span><span class="ri-main"><b>${esc(r.name)} <span class="ri-tag">${esc(r.tag)}</span></b><span>${esc(r.desc)}</span></span><span class="ri-metrics"><b>${esc(r.time)}</b><span>${esc(r.distance)}</span></span></button>`).join("");
    box.querySelectorAll("[data-route]").forEach(btn=>btn.onclick=()=>{selected=btn.dataset.route;render();toast(`${routes.find(r=>r.id===selected).name} selected`)})
  }
  function open(){
    const d=window.__mapxDestination;
    $("riDestination").textContent=d&&d.name?d.name:"Brookefields Mall";
    shell.hidden=false;render();
  }
  function close(){shell.hidden=true}
  function start(){
    const r=routes.find(x=>x.id===selected)||routes[0];
    close();
    toast(`Starting ${r.name}`);
    if(typeof window.drawRoute==="function")window.drawRoute();
    setTimeout(()=>{const b=$("navPlay");if(b)b.click()},250);
  }
  launch.addEventListener("click",open); document.addEventListener("click",function(e){var t=e.target&&e.target.closest?e.target.closest("#riClose"):null;if(t){e.preventDefault();e.stopPropagation();close();}}); $("riStart").addEventListener("click",start);
  shell.addEventListener("click",e=>{if(e.target===shell)close()});
})();

/* ===== NEXT STAGE: TRIP TELEMETRY DASHBOARD ===== */
(function tripTelemetry(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("tripDash"))return;
  const launch=document.createElement("button");
  launch.id="tripDashLaunch";launch.className="trip-dash-launch";launch.textContent="◈ Trip Monitor";wrap.appendChild(launch);
  const dash=document.createElement("section");dash.id="tripDash";dash.className="trip-dash";dash.hidden=true;
  dash.innerHTML=`<div class="td-head"><div><h3>Trip Monitor</h3><small>Navigation telemetry</small></div><button id="tdClose" class="td-close" aria-label="Close">×</button></div><div class="td-destination"><small>ACTIVE DESTINATION</small><strong id="tdDestination">Brookefields Mall</strong></div><div class="td-grid"><div class="td-stat"><span>Progress</span><b id="tdProgress">0%</b></div><div class="td-stat"><span>ETA</span><b id="tdEta">9 min</b></div><div class="td-stat"><span>Distance</span><b id="tdDistance">3.2 km</b></div><div class="td-stat"><span>Status</span><b id="tdStatusShort">Ready</b></div></div><div class="td-bar"><div id="tdFill" class="td-fill"></div></div><div class="td-row"><span>Trip progress</span><span id="tdClock">—</span></div><div class="td-actions"><button id="tdSync">↻ Sync Route</button><button id="tdCenter" class="primary">⌖ Center Map</button></div><div id="tdStatus" class="td-status">SYSTEM READY</div></section>`;
  wrap.appendChild(dash);
  let timer=null,startedAt=0;
  function destination(){return (window.__mapxDestination&&window.__mapxDestination.name)||"Brookefields Mall"}
  function update(){
    const p=$('navProgressText')?parseInt($('navProgressText').textContent,10):0;
    const eta=$('navArrivalTime')?$('navArrivalTime').textContent:"9 min";
    $("tdDestination").textContent=destination();$("tdProgress").textContent=(Number.isFinite(p)?p:0)+"%";$("tdEta").textContent=eta||"NOW";$("tdFill").style.width=(Number.isFinite(p)?p:0)+"%";
    const status=$('navProgressStatus')?$navProgressStatusText():"READY";
    function $navProgressStatusText(){return $('navProgressStatus').textContent}
    $("tdStatusShort").textContent=status.charAt(0)+status.slice(1).toLowerCase();$("tdStatus").textContent=status+" · TELEMETRY ONLINE";
    if(startedAt){const sec=Math.max(0,Math.floor((Date.now()-startedAt)/1000));$("tdClock").textContent=`Trip ${Math.floor(sec/60)}m ${String(sec%60).padStart(2,"0")}s`;}
    if(String(status).toUpperCase()==="NAVIGATING")dash.classList.add("trip-dash-running");else dash.classList.remove("trip-dash-running");
  }
  function open(){dash.hidden=false;update()}
  function close(){dash.hidden=true}
  function sync(){update();toast("Trip telemetry synchronized")}
  function center(){const d=window.__mapxDestination;if(d&&Number.isFinite(d.lat)&&Number.isFinite(d.lng))map.flyTo([d.lat,d.lng],15,{duration:.7});else map.setView([11.0168,76.9558],13);toast("Map centered")}
  launch.onclick=open;$("tdClose").onclick=close;$("tdSync").onclick=sync;$("tdCenter").onclick=center;
  document.addEventListener("click",e=>{if(e.target&&e.target.id==="navPlay"){startedAt=Date.now();open()}if(e.target&&["navPause","navFinish"].includes(e.target.id))update()});
  timer=setInterval(()=>{if(!dash.hidden)update()},1000);
  window.addEventListener("beforeunload",()=>clearInterval(timer));
})();

/* ===== NEXT STAGE: SMART ROUTE COMPANION ===== */
(function smartRouteCompanion(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("routeCompanion"))return;
  const launch=document.createElement("button");
  launch.id="routeCompanionLaunch";launch.className="route-companion-launch";launch.textContent="✦ Route Companion";wrap.appendChild(launch);
  const panel=document.createElement("section");
  panel.id="routeCompanion";panel.className="route-companion";panel.hidden=true;
  panel.innerHTML=`<div class="rc-head"><div><h3>Route Companion</h3><small>Useful places along your demo route</small></div><button id="rcClose" class="rc-close" aria-label="Close">×</button></div><div class="rc-live"><div><small>DESTINATION</small><b id="rcDestination">Brookefields Mall</b></div><div><small>ROUTE STATUS</small><b id="rcStatus">READY</b></div></div><div id="rcList" class="rc-list"></div><div class="rc-actions"><button id="rcRefresh">↻ Refresh</button><button id="rcNavigate" class="primary">▶ Navigate</button></div><div class="rc-note">Places and distances shown here are demo route companions. They are not live traffic or live road-service results.</div>`;
  wrap.appendChild(panel);
  const places=[
    {name:"Brookefields Mall",type:"Shopping · Destination",icon:"🛍️",distance:"0.0 km",lat:11.0183,lng:76.9700},
    {name:"Gandhipuram",type:"Transit · City Center",icon:"🚏",distance:"0.8 km",lat:11.0183,lng:76.9674},
    {name:"VOC Park",type:"Park · Stop",icon:"🌳",distance:"1.4 km",lat:11.0122,lng:76.9600},
    {name:"Ganga Hospital",type:"Health · Landmark",icon:"🏥",distance:"1.9 km",lat:11.0225,lng:76.9520},
    {name:"Avinashi Road",type:"Road · Checkpoint",icon:"🛣️",distance:"2.2 km",lat:11.0200,lng:76.9620}
  ];
  let selectedIndex=0;
  function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
  function render(){
    const list=$("rcList");
    list.innerHTML=places.map((p,i)=>`<button class="rc-item ${i===selectedIndex?"active":""}" data-rc-index="${i}"><span class="rc-icon">${p.icon}</span><span class="rc-main"><b>${esc(p.name)}</b><span>${esc(p.type)}</span></span><span class="rc-distance">${esc(p.distance)}</span></button>`).join("");
    list.querySelectorAll("[data-rc-index]").forEach(btn=>btn.onclick=()=>{selectedIndex=Number(btn.dataset.rcIndex);render();const p=places[selectedIndex];map.flyTo([p.lat,p.lng],15,{duration:.6});toast(`${p.name} selected`)})
  }
  function destination(){return window.__mapxDestination&&window.__mapxDestination.name?window.__mapxDestination.name:"Brookefields Mall"}
  function open(){panel.hidden=false;$("rcDestination").textContent=destination();const s=$("navProgressStatus");$("rcStatus").textContent=s?s.textContent:"READY";render()}
  function close(){panel.hidden=true}
  function refresh(){selectedIndex=0;$("rcDestination").textContent=destination();render();toast("Route companion refreshed")}
  function navigate(){const p=places[selectedIndex];window.__mapxDestination={name:p.name,type:p.type,lat:p.lat,lng:p.lng};if(typeof drawRoute==="function")drawRoute();setTimeout(()=>{const b=$("navPlay");if(b)b.click()},250);toast(`Navigation started to ${p.name}`);close()}
  launch.onclick=open;$("rcClose").onclick=close;$("rcRefresh").onclick=refresh;$("rcNavigate").onclick=navigate;
  document.addEventListener("click",e=>{if(e.target&&["navPlay","navPause","navFinish"].includes(e.target.id)&&!panel.hidden){const s=$("navProgressStatus");if(s)$("rcStatus").textContent=s.textContent}});
  window.addEventListener("beforeunload",()=>{});
  render();
})();

/* ===== NEXT STAGE: MAPX VISUAL CONTROL CENTER ===== */
(function visualControlCenter(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("visualControlCenter"))return;
  const launch=document.createElement("button");
  launch.id="visualControlLaunch";launch.className="visual-control-launch";launch.textContent="◈ Visual Control";wrap.appendChild(launch);
  const panel=document.createElement("section");
  panel.id="visualControlCenter";panel.className="visual-control";panel.hidden=true;
  panel.innerHTML=`<div class="vc-head"><div><h3>Visual Control Center</h3><small>Customize your MapXplorer view</small></div><button id="vcClose" class="vc-close" aria-label="Close">×</button></div>
  <div class="vc-section"><span class="vc-label">MAP STYLE</span><div class="vc-grid"><button id="vcStandard" class="vc-choice active">🗺️ Standard</button><button id="vcTerrain" class="vc-choice">⛰️ Terrain</button></div></div>
  <div class="vc-section"><span class="vc-label">VISUAL LAYERS</span><label class="vc-switch"><span>🤖 Explorer characters</span><input id="vcCharacters" type="checkbox" checked><i></i></label><label class="vc-switch"><span>✨ Route effects</span><input id="vcRouteFx" type="checkbox" checked><i></i></label><label class="vc-switch"><span>📍 Map places</span><input id="vcPlaces" type="checkbox" checked><i></i></label></div>
  <div class="vc-section"><span class="vc-label">MAP MODE</span><div class="vc-grid"><button id="vc3d">🌌 Hyper 3D</button><button id="vcFullscreen">⛶ Fullscreen</button></div></div>
  <div class="vc-actions"><button id="vcReset">↺ Reset View</button><button id="vcClose2" class="primary">✓ Done</button></div>
  <div class="vc-note">All controls affect the local MapXplorer interface. Map tiles are supplied by the configured map providers.</div>`;
  wrap.appendChild(panel);
  const routeFx=$("routeFx");
  let placeVisible=true;
  function open(){panel.hidden=false;sync()}
  function close(){panel.hidden=true}
  function sync(){
    const terrain=currentLayer===terrainLayer;
    $("vcStandard").classList.toggle("active",!terrain);$("vcTerrain").classList.toggle("active",terrain);
    const c=$("charToggle");$("vcCharacters").checked=c?c.checked:true;
    $("vcRouteFx").checked=!routeFx||routeFx.style.display!=="none";
    $("vcPlaces").checked=placeVisible;
  }
  function setPlaces(on){placeVisible=on; if(on){render(activeType||"all")}else{document.querySelectorAll(".place-marker,.map-character").forEach(x=>x.style.display="none");}}
  $("vcStandard").onclick=()=>{switchLayer(mapLayer,"Standard");sync()};
  $("vcTerrain").onclick=()=>{switchLayer(terrainLayer,"Terrain");sync()};
  $("vcCharacters").onchange=e=>{const c=$("charToggle");if(c){c.checked=e.target.checked;refresh()}else if(!e.target.checked){document.querySelectorAll(".map-character").forEach(x=>x.remove())}sync()};
  $("vcRouteFx").onchange=e=>{if(routeFx)routeFx.style.display=e.target.checked?"":"none";sync()};
  $("vcPlaces").onchange=e=>{setPlaces(e.target.checked);sync()};
  $("vc3d").onclick=()=>{activate3D();toast("Hyper 3D view activated");sync()};
  $("vcFullscreen").onclick=()=>toggleFullMap();
  $("vcReset").onclick=()=>{resetMap();placeVisible=true;sync()};
  launch.onclick=open;$("vcClose").onclick=close;$("vcClose2").onclick=close;
  document.addEventListener("fullscreenchange",()=>{if(!panel.hidden)sync()});
  sync();
})();


/* ===== NEXT STAGE: MAPX COMMAND CENTER ===== */
(function commandCenter(){
  const wrap=$("mapWrap");
  if(!wrap||document.getElementById("mapxCommandCenter"))return;
  const launch=document.createElement("button");
  launch.id="mapxCommandLaunch"; launch.className="command-launch"; launch.textContent="⌘ MapX Command";
  wrap.appendChild(launch);
  const panel=document.createElement("section");
  panel.id="mapxCommandCenter"; panel.className="command-center"; panel.hidden=true;
  panel.innerHTML=`<div class="cmd-head"><div><h3>MapX Command Center</h3><small>Type a command to control your map</small></div><button id="cmdClose" class="cmd-close" aria-label="Close">×</button></div>
  <form id="cmdForm" class="cmd-form"><input id="cmdInput" autocomplete="off" placeholder="Try: 3D, terrain, locate, reset, nearby, route"><button class="primary" type="submit">Run</button></form>
  <div class="cmd-chips"><button type="button" data-cmd="3D">3D</button><button type="button" data-cmd="terrain">Terrain</button><button type="button" data-cmd="locate">Locate</button><button type="button" data-cmd="nearby">Nearby</button><button type="button" data-cmd="route">Route</button><button type="button" data-cmd="reset">Reset</button></div>
  <div class="cmd-result" id="cmdResult" aria-live="polite"><b>READY</b><span>MapX is waiting for your command.</span></div>
  <div class="cmd-history" id="cmdHistory"><span>COMMAND HISTORY</span></div>`;
  wrap.appendChild(panel);
  const input=$("cmdInput"), result=$("cmdResult"), history=$("cmdHistory");
  const recent=[];
  function say(title,msg){result.innerHTML=`<b>${title}</b><span>${msg}</span>`;}
  function run(raw){
    const q=String(raw||"").trim().toLowerCase(); if(!q){say("EMPTY","Type a command first.");return;}
    recent.unshift(raw.trim()); if(recent.length>5)recent.pop();
    history.innerHTML='<span>COMMAND HISTORY</span>'+recent.map(x=>`<button type="button" data-history="${x.replace(/"/g,'&quot;')}">${x}</button>`).join('');
    if(q.includes("3d")||q.includes("hyper")){activate3D();say("3D MODE","Hyper 3D view activated.");return;}
    if(q.includes("terrain")){switchLayer(terrainLayer,"Terrain");say("TERRAIN","Terrain layer activated.");return;}
    if(q.includes("standard")||q.includes("map mode")){switchLayer(mapLayer,"Standard");say("STANDARD","Standard map layer activated.");return;}
    if(q.includes("locate")||q.includes("my location")){const b=$("locateMap");if(b)b.click();say("LOCATION","Location control triggered.");return;}
    if(q.includes("nearby")){const b=document.querySelector('[data-nav="nearby"]');if(b)b.click();say("NEARBY","Nearby explorer opened.");return;}
    if(q.includes("route")||q.includes("direction")){const b=$("routeBtn");if(b)b.click();say("ROUTE","Route planner opened.");return;}
    if(q.includes("reset")){resetMap();say("RESET","Map view restored.");return;}
    if(q.includes("full")){toggleFullMap();say("FULLSCREEN","Map fullscreen control triggered.");return;}
    if(q.includes("weather")){const b=document.querySelector('[data-nav="weather"]');if(b)b.click();say("WEATHER","Weather section opened.");return;}
    if(q.includes("search")){input.blur();say("SEARCH","Use the main search bar at the top to search real places.");return;}
    say("NOT RECOGNIZED","Try 3D, terrain, locate, nearby, route, reset, fullscreen, or weather.");
  }
  $("cmdForm").addEventListener("submit",e=>{e.preventDefault();run(input.value);});
  panel.querySelectorAll("[data-cmd]").forEach(b=>b.addEventListener("click",()=>{input.value=b.dataset.cmd;run(b.dataset.cmd);}));
  history.addEventListener("click",e=>{const b=e.target.closest("[data-history]");if(b){input.value=b.dataset.history;run(input.value);}});
  launch.onclick=()=>{panel.hidden=false;input.focus()}; $("cmdClose").onclick=()=>panel.hidden=true;
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden)panel.hidden=true;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();panel.hidden=false;input.focus();}});
})();


/* ===== WORLD GPS TRACKING UPGRADE ===== */
(function worldGps(){
  if(window.__worldGpsLoaded) return; window.__worldGpsLoaded=true;
  const $=id=>document.getElementById(id);
  const wrap=$('mapWrap')||document.body;
  const panel=document.createElement('section');
  panel.id='worldGpsPanel'; panel.className='world-gps-panel';
  panel.innerHTML=`<div class="wg-head"><div><b>🌍 WORLD GPS TRACKER</b><span id="wgStatus">READY</span></div><button id="wgClose" type="button">×</button></div><div class="wg-grid"><div><small>LATITUDE</small><strong id="wgLat">—</strong></div><div><small>LONGITUDE</small><strong id="wgLon">—</strong></div><div><small>ACCURACY</small><strong id="wgAcc">—</strong></div><div><small>ALTITUDE</small><strong id="wgAlt">—</strong></div></div><div class="wg-actions"><button id="wgStart" type="button">📡 Start GPS</button><button id="wgStop" type="button">■ Stop</button><button id="wgFollow" type="button">◎ Follow</button></div><p id="wgNote">GPS requires browser permission and a secure context such as HTTPS. On supported devices, the browser can continuously report position changes.</p></section>`;
  wrap.appendChild(panel);
  let watchId=null, marker=null, accuracyCircle=null, follow=false;
  function fmt(n){return Number.isFinite(n)?n.toFixed(6):'—'}
  function update(pos){
    const c=pos.coords;
    window.__mapxLastGps={lat:c.latitude,lng:c.longitude,name:'My location'};
    window.dispatchEvent(new CustomEvent('mapx:gps',{detail:{coords:c}})); $('wgLat').textContent=fmt(c.latitude); $('wgLon').textContent=fmt(c.longitude); $('wgAcc').textContent=Number.isFinite(c.accuracy)?Math.round(c.accuracy)+' m':'—'; $('wgAlt').textContent=Number.isFinite(c.altitude)?Math.round(c.altitude)+' m':'—'; $('wgStatus').textContent='TRACKING';
    if(typeof L!=='undefined' && typeof map!=='undefined'){
      const ll=L.latLng(c.latitude,c.longitude);
      if(!marker) marker=L.marker(ll,{zIndexOffset:2000}).addTo(map).bindPopup('<b>You are here</b>'); else marker.setLatLng(ll);
      if(!accuracyCircle) accuracyCircle=L.circle(ll,{radius:Math.max(1,c.accuracy||20),weight:1,fillOpacity:.08}).addTo(map); else accuracyCircle.setLatLng(ll).setRadius(Math.max(1,c.accuracy||20));
      if(follow) map.setView(ll,Math.max(map.getZoom(),15),{animate:true});
    }
  }
  function error(err){$('wgStatus').textContent=err&&err.code===1?'PERMISSION DENIED':'GPS ERROR'; $('wgNote').textContent=err&&err.code===1?'Location permission was denied. Allow location access in the browser to track your device.':'GPS could not be read. Check device location services and try again.';}
  function start(){if(!navigator.geolocation){error({code:2});return} if(watchId!==null) navigator.geolocation.clearWatch(watchId); $('wgStatus').textContent='REQUESTING…'; $('wgNote').textContent='Waiting for a location fix…'; watchId=navigator.geolocation.watchPosition(update,error,{enableHighAccuracy:true,maximumAge:5000,timeout:15000});}
  function stop(){if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null} $('wgStatus').textContent='STOPPED';$('wgNote').textContent='GPS tracking stopped. Your last marker remains on the map.'}
  $('wgStart').onclick=start; $('wgStop').onclick=stop; $('wgFollow').onclick=()=>{follow=!follow;$('wgFollow').textContent=follow?'◎ Following':'◎ Follow';if(follow&&marker&&typeof map!=='undefined')map.setView(marker.getLatLng(),Math.max(map.getZoom(),15),{animate:true})}; $('wgClose').onclick=()=>panel.classList.toggle('closed');
  const open=document.createElement('button');open.type='button';open.className='world-gps-open';open.textContent='🌍 GPS';open.title='Open World GPS Tracker';document.body.appendChild(open);open.onclick=()=>panel.classList.toggle('closed');
})();


/* ===== MAPXPLORER WORLD NAVIGATION PRO =====
   Live OSRM road routing + GPS navigation + voice + off-route rerouting.
   Routing is online and depends on the public OSRM service availability.
*/
(function worldNavigationPro(){
  const wrap=document.getElementById("mapWrap");
  if(!wrap || document.getElementById("worldNavPro")) return;

  const launch=document.createElement("button");
  launch.id="worldNavProLaunch";
  launch.className="world-nav-pro-launch";
  launch.type="button";
  launch.textContent="🧭 Live Navigation Pro";
  wrap.appendChild(launch);

  const panel=document.createElement("section");
  panel.id="worldNavPro";
  panel.className="world-nav-pro";
  panel.hidden=true;
  panel.innerHTML=`
    <div class="wnp-head">
      <div><b>🧭 LIVE NAVIGATION PRO</b><span id="wnpStatus">READY</span></div>
      <button id="wnpClose" type="button" aria-label="Close navigation">×</button>
    </div>
    <div class="wnp-destination">
      <small>DESTINATION</small>
      <strong id="wnpDestination">Select a place first</strong>
    </div>
    <div class="wnp-main">
      <div class="wnp-turn" id="wnpTurn">●</div>
      <div><b id="wnpInstruction">Ready for navigation</b><span id="wnpSub">Choose a destination and start GPS.</span></div>
    </div>
    <div class="wnp-stats">
      <div><small>REMAINING</small><strong id="wnpDistance">—</strong></div>
      <div><small>ETA</small><strong id="wnpEta">—</strong></div>
      <div><small>SPEED</small><strong id="wnpSpeed">—</strong></div>
    </div>
    <div class="wnp-progress"><i id="wnpProgress"></i></div>
    <div class="wnp-actions">
      <button id="wnpStart" type="button">▶ Start</button>
      <button id="wnpVoice" type="button">🔊 Voice On</button>
      <button id="wnpRecenter" type="button">◎ Recenter</button>
      <button id="wnpStop" type="button">■ Stop</button>
    </div>
    <div class="wnp-note" id="wnpNote">Uses your device GPS and an online OpenStreetMap/OSRM routing service. GPS permission is required.</div>
  `;
  wrap.appendChild(panel);

  let watchId=null, routeLayer=null, routeCoords=[], routeSteps=[], destination=null;
  let lastPos=null, spokenIndex=-1, voice=true, navigating=false;

  const $=id=>document.getElementById(id);
  const esc=v=>String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const km=m=>m>=1000?(m/1000).toFixed(m>=10000?0:1)+" km":Math.round(m)+" m";
  const mins=s=>{const m=Math.max(1,Math.round(s/60));return m<60?m+" min":Math.floor(m/60)+" h "+(m%60)+" min"};

  function hav(a,b){
    const R=6371000, p=Math.PI/180;
    const d1=(b.lat-a.lat)*p, d2=(b.lng-a.lng)*p;
    const x=Math.sin(d1/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(d2/2)**2;
    return 2*R*Math.asin(Math.sqrt(x));
  }
  function nearestPoint(p){
    if(!routeCoords.length)return {index:0,distance:Infinity};
    let best={index:0,distance:Infinity};
    routeCoords.forEach((q,i)=>{const d=hav(p,{lat:q[1],lng:q[0]});if(d<best.distance)best={index:i,distance:d};});
    return best;
  }
  function announce(text){
    if(!voice || !("speechSynthesis" in window) || !text)return;
    try{speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.rate=.95;u.pitch=1;speechSynthesis.speak(u);}catch{}
  }
  function setStatus(t){$("wnpStatus").textContent=t}
  function destinationFromGlobal(){
    const d=window.__mapxDestination;
    if(d && Number.isFinite(Number(d.lat)) && Number.isFinite(Number(d.lng))) return {lat:Number(d.lat),lng:Number(d.lng),name:d.name||"Destination"};
    return null;
  }
  function open(){panel.hidden=false; launch.classList.add("active"); const d=destinationFromGlobal(); if(d){destination=d;$("wnpDestination").textContent=d.name}}
  function close(){panel.hidden=true; launch.classList.remove("active")}
  function clearRouteLayer(){if(routeLayer && typeof map!=="undefined"){map.removeLayer(routeLayer);routeLayer=null}}
  function currentPoint(){
    if(lastPos)return {lat:lastPos.coords.latitude,lng:lastPos.coords.longitude};
    if(typeof map!=="undefined"){const c=map.getCenter();return {lat:c.lat,lng:c.lng}}
    return null;
  }
  async function buildRoute(start){
    if(!destination){const d=destinationFromGlobal(); if(d)destination=d;}
    if(!destination){$("wnpNote").textContent="Select a destination on the map or search for a place first.";return false}
    setStatus("ROUTING…"); $("wnpNote").textContent="Calculating a real road route…";
    const url=`https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson&steps=true`;
    try{
      const r=await fetch(url,{headers:{Accept:"application/json"}});
      if(!r.ok)throw new Error("Routing service unavailable");
      const data=await r.json();
      if(data.code!=="Ok" || !data.routes?.length)throw new Error("No road route found");
      const rt=data.routes[0];
      routeCoords=rt.geometry.coordinates||[];
      routeSteps=(rt.legs||[]).flatMap(l=>l.steps||[]);
      clearRouteLayer();
      if(typeof L!=="undefined" && typeof map!=="undefined"){
        routeLayer=L.geoJSON({type:"Feature",geometry:rt.geometry},{style:{color:"#2de6ff",weight:7,opacity:.88}}).addTo(map);
        const bounds=routeLayer.getBounds(); if(bounds.isValid())map.fitBounds(bounds,{padding:[40,40]});
      }
      $("wnpDistance").textContent=km(rt.distance);
      $("wnpEta").textContent=mins(rt.duration);
      $("wnpProgress").style.width="0%";
      const step=routeSteps[0];
      const text=step?.maneuver?.instruction || step?.name || "Follow the highlighted road";
      $("wnpInstruction").textContent=text;
      $("wnpSub").textContent=step?.name || "Follow the highlighted route";
      $("wnpTurn").textContent=step?.maneuver?.type==="turn"?"↪":"➜";
      setStatus("ROUTE READY");
      $("wnpNote").textContent="Real road geometry loaded. Live traffic is not included by this public routing endpoint.";
      return true;
    }catch(err){
      setStatus("ROUTE ERROR");
      $("wnpNote").textContent="Could not calculate a road route. Check your internet connection and try again.";
      return false;
    }
  }
  function updateNavigation(pos){
    lastPos=pos;
    if(!navigating || !routeCoords.length)return;
    const p={lat:pos.coords.latitude,lng:pos.coords.longitude};
    const near=nearestPoint(p);
    const off=near.distance;
    if(off>120){
      $("wnpNote").textContent=`You are about ${Math.round(off)} m from the route. Rerouting…`;
      if(!updateNavigation.rerouting){
        updateNavigation.rerouting=true;
        buildRoute(p).finally(()=>updateNavigation.rerouting=false);
      }
      return;
    }
    const progress=Math.max(0,Math.min(100,(near.index/Math.max(1,routeCoords.length-1))*100));
    $("wnpProgress").style.width=progress.toFixed(1)+"%";
    const remaining=routeCoords.slice(Math.min(near.index,routeCoords.length-1));
    let rem=0;
    for(let i=1;i<remaining.length;i++)rem+=hav({lat:remaining[i-1][1],lng:remaining[i-1][0]},{lat:remaining[i][1],lng:remaining[i][0]});
    $("wnpDistance").textContent=km(rem);
    const speed=Number(pos.coords.speed);
    $("wnpSpeed").textContent=Number.isFinite(speed)&&speed>=0?(speed*3.6).toFixed(0)+" km/h":"—";
    const stepIndex=Math.min(routeSteps.length-1,Math.floor(progress/100*Math.max(1,routeSteps.length)));
    const step=routeSteps[stepIndex];
    if(step){
      const text=step.maneuver?.instruction || step.name || "Continue on the route";
      $("wnpInstruction").textContent=text;
      $("wnpSub").textContent=step.name || "";
      $("wnpTurn").textContent=step.maneuver?.type==="turn"?"↪":"➜";
      if(stepIndex!==spokenIndex && step.distance<250){spokenIndex=stepIndex;announce(text)}
    }
    if(typeof map!=="undefined" && map.setView && $("wnpRecenter").dataset.follow==="1") map.setView([p.lat,p.lng],Math.max(map.getZoom(),16),{animate:true});
  }
  function gpsError(){
    setStatus("GPS ERROR");
    $("wnpNote").textContent="Location access was unavailable. Allow GPS permission and use HTTPS/localhost.";
  }
  function startGps(){
    if(!navigator.geolocation){gpsError();return}
    if(watchId!==null)return;
    watchId=navigator.geolocation.watchPosition(updateNavigation, gpsError,{enableHighAccuracy:true,maximumAge:2000,timeout:10000});
  }
  async function start(){
    open();
    const d=destinationFromGlobal(); if(d){destination=d;$("wnpDestination").textContent=d.name}
    const p=currentPoint();
    if(!p){$("wnpNote").textContent="Waiting for GPS…";startGps();return}
    const ok=await buildRoute(p);
    if(ok){navigating=true;startGps();setStatus("LIVE");announce($("wnpInstruction").textContent)}
  }
  function stop(){
    navigating=false;
    if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null}
    setStatus("PAUSED");
    $("wnpNote").textContent="Navigation paused.";
    if("speechSynthesis" in window)speechSynthesis.cancel();
  }
  launch.onclick=open;
  $("wnpClose").onclick=()=>{stop();close()};
  $("wnpStart").onclick=start;
  $("wnpStop").onclick=stop;
  $("wnpVoice").onclick=()=>{voice=!voice;$("wnpVoice").textContent=voice?"🔊 Voice On":"🔇 Voice Off";if(!voice&&"speechSynthesis"in window)speechSynthesis.cancel()};
  $("wnpRecenter").onclick=()=>{const p=currentPoint();if(p&&typeof map!=="undefined")map.setView([p.lat,p.lng],16,{animate:true});$("wnpRecenter").dataset.follow="1";toast("Follow mode enabled")};
  const oldSelect=window.selectPlace;
  if(typeof oldSelect==="function"){
    window.selectPlace=function(p){destination={lat:Number(p.lat),lng:Number(p.lng),name:p.name};window.__mapxDestination=destination;$("wnpDestination").textContent=p.name;oldSelect(p);};
  }
  window.addEventListener("mapx:navigation-start",open);
  window.mapxWorldNavPro={open,start,stop,setDestination:d=>{destination=d;window.__mapxDestination=d;$("wnpDestination").textContent=d.name||"Destination"}};
})();


/* ===== MAPXPLORER WORLD NAVIGATION PRO PLUS =====
   Multi-stop trip planner + alternate OSRM routes + route selection.
   Uses online routing; no claim of live traffic data.
*/
(function worldTripPlannerPlus(){
  if(window.__mapxTripPlannerPlus)return; window.__mapxTripPlannerPlus=true;
  const wrap=document.getElementById('mapWrap'); if(!wrap)return;
  const launch=document.createElement('button'); launch.className='trip-launch'; launch.type='button'; launch.textContent='🧳 Trip Planner'; wrap.appendChild(launch);
  const panel=document.createElement('section'); panel.className='trip-panel'; panel.hidden=true; panel.innerHTML=`
    <div class="tp-head"><div><b>🧳 WORLD TRIP PLANNER</b><small>Multi-stop routes · alternate paths · route comparison</small></div><button class="tp-close" id="tpClose">×</button></div>
    <div class="tp-dest"><small>DESTINATION</small><strong id="tpDestination">Select a destination</strong></div>
    <div class="tp-waypoints" id="tpWaypoints"></div>
    <div class="tp-actions"><button id="tpAddCurrent">＋ Add map center</button><button id="tpClear">Clear stops</button><button id="tpBuild" class="primary">🛣️ Compare routes</button></div>
    <div class="tp-options"><button class="active" data-mode="driving">🚗 Driving</button><button data-mode="walking">🚶 Walking</button><button data-mode="cycling">🚲 Cycling</button></div>
    <div class="tp-list" id="tpRoutes"></div>
    <div class="tp-note" id="tpNote">Select a place on the map, then add optional stops. Routing uses an online OSRM endpoint and may be unavailable or rate-limited.</div>`;
  wrap.appendChild(panel);
  const $=id=>document.getElementById(id);
  let stops=[], routes=[], selectedRoute=0, mode='driving', routeLayer=null;
  const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const km=m=>m>=1000?(m/1000).toFixed(m>=10000?0:1)+' km':Math.round(m)+' m';
  const mins=s=>{const m=Math.max(1,Math.round(s/60));return m<60?m+' min':Math.floor(m/60)+' h '+(m%60)+' min'};
  function open(){panel.hidden=false;launch.classList.add('active');syncDestination();renderStops();}
  function close(){panel.hidden=true;launch.classList.remove('active')}
  function syncDestination(){const d=window.__mapxDestination;if(d&&Number.isFinite(+d.lat)&&Number.isFinite(+d.lng)){stops=stops.filter(s=>s.name!==d.name);$('tpDestination').textContent=d.name||'Destination';}else if(!stops.length){$('tpDestination').textContent='Select a destination';}}
  function addStop(d){if(!d||!Number.isFinite(+d.lat)||!Number.isFinite(+d.lng))return; if(stops.some(s=>Math.abs(s.lat-d.lat)<1e-6&&Math.abs(s.lng-d.lng)<1e-6))return; stops.push({lat:+d.lat,lng:+d.lng,name:d.name||'Stop '+stops.length});renderStops();}
  function renderStops(){const box=$('tpWaypoints');box.innerHTML='';stops.forEach((s,i)=>{const row=document.createElement('div');row.className='tp-waypoint';row.innerHTML=`<b>${i+1}</b><span>${esc(s.name)}</span><button type="button" aria-label="Remove stop">×</button>`;row.querySelector('button').onclick=()=>{stops.splice(i,1);renderStops()};box.appendChild(row)});}
  function currentCenter(){const c=map.getCenter();return {lat:c.lat,lng:c.lng,name:'Map center'}}
  function draw(rt){if(routeLayer){map.removeLayer(routeLayer);routeLayer=null} routeLayer=L.geoJSON({type:'Feature',geometry:rt.geometry},{style:{color:'#2de6ff',weight:7,opacity:.88}}).addTo(map);const b=routeLayer.getBounds();if(b.isValid())map.fitBounds(b,{padding:[40,40]});}
  function routeUrl(points){const coords=points.map(p=>`${p.lng},${p.lat}`).join(';');let profile=mode;if(mode==='walking')profile='walking';if(mode==='cycling')profile='cycling';return `https://router.project-osrm.org/route/v1/${profile}/${coords}?overview=full&geometries=geojson&steps=true&alternatives=true`;}
  async function build(){
    const d=window.__mapxDestination;
    if(!d||!Number.isFinite(+d.lat)||!Number.isFinite(+d.lng)){ $('tpNote').textContent='Select a destination first. Click a place or search for a destination.'; return; }
    const start=window.__mapxLastGps&&Number.isFinite(+window.__mapxLastGps.lat)?window.__mapxLastGps:currentCenter();
    const points=[{lat:+start.lat,lng:+start.lng,name:start.name||'Start'},...stops.filter(s=>s.name!==d.name),{lat:+d.lat,lng:+d.lng,name:d.name||'Destination'}];
    $('tpNote').textContent='Calculating route alternatives…';$('tpRoutes').innerHTML='<div class="tp-note">Routing…</div>';
    try{const r=await fetch(routeUrl(points),{headers:{Accept:'application/json'}});if(!r.ok)throw new Error('service');const data=await r.json();if(data.code!=='Ok'||!data.routes?.length)throw new Error('no route');routes=data.routes.slice(0,3);selectedRoute=0;renderRoutes();if(routes[0])draw(routes[0]);$('tpNote').textContent=`${routes.length} route option${routes.length===1?'':'s'} returned. Traffic is not included by the public endpoint.`;}
    catch(e){$('tpRoutes').innerHTML='';$('tpNote').textContent='Could not calculate routes. Check your internet connection or try again later.';}
  }
  function renderRoutes(){const box=$('tpRoutes');box.innerHTML='';routes.forEach((r,i)=>{const b=document.createElement('button');b.type='button';b.className='tp-route'+(i===selectedRoute?' active':'');b.innerHTML=`<span><b>Route ${i+1}${i===0?' · Recommended by routing service':''}</b><small>${mode} · ${Math.round(r.distance/1000*10)/10} km · ${mins(r.duration)}</small></span><strong>${mins(r.duration)}</strong>`;b.onclick=()=>{selectedRoute=i;renderRoutes();draw(r)};box.appendChild(b)});}
  launch.onclick=open;$('tpClose').onclick=close;$('tpAddCurrent').onclick=()=>{addStop(currentCenter());$('tpNote').textContent='Map center added as a stop.'};$('tpClear').onclick=()=>{stops=[];renderStops();routes=[];$('tpRoutes').innerHTML='';$('tpNote').textContent='Stops cleared.'};$('tpBuild').onclick=build;
  panel.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;panel.querySelectorAll('[data-mode]').forEach(x=>x.classList.toggle('active',x===b));$('tpRoutes').innerHTML='';routes=[]});
  const old=window.selectPlace;if(typeof old==='function'){window.selectPlace=function(p){window.__mapxDestination={lat:+p.lat,lng:+p.lng,name:p.name};$('tpDestination').textContent=p.name||'Destination';old(p)}}
  window.addEventListener('mapx:gps',e=>{const c=e.detail?.coords;if(c&&Number.isFinite(c.latitude)&&Number.isFinite(c.longitude))window.__mapxLastGps={lat:c.latitude,lng:c.longitude,name:'My location'}});
  window.mapxTripPlannerPlus={open,build,addStop};
})();

/* ===== NEXT STAGE: LIVE GPS TRACK RECORDER ===== */
(function gpsTrackRecorder(){
  const wrap=document.getElementById('mapWrap');
  if(!wrap || document.getElementById('gpsTrackPanel')) return;
  const launch=document.createElement('button');
  launch.id='gpsTrackLaunch'; launch.className='gps-track-launch'; launch.textContent='◉ GPS Track';
  wrap.appendChild(launch);
  const panel=document.createElement('section');
  panel.id='gpsTrackPanel'; panel.className='gps-track-panel'; panel.hidden=true;
  panel.innerHTML=`<div class="gt-head"><div><h3>Live GPS Track</h3><small>Record your own movement on the map</small></div><button id="gtClose" class="gt-close" aria-label="Close">×</button></div><div class="gt-stats"><div><span>STATUS</span><b id="gtStatus">READY</b></div><div><span>POINTS</span><b id="gtPoints">0</b></div><div><span>DISTANCE</span><b id="gtDistance">0.00 km</b></div><div><span>ACCURACY</span><b id="gtAccuracy">—</b></div></div><div class="gt-actions"><button id="gtStart" class="primary">▶ Start tracking</button><button id="gtPause">Ⅱ Pause</button><button id="gtClear">⊗ Clear</button></div><div class="gt-note">Uses your browser's location permission. The track stays in this page session and is not uploaded by this feature.</div></section>`;
  wrap.appendChild(panel);
  let watchId=null, recording=false, paused=false, points=[], line=null, totalKm=0;
  function open(){panel.hidden=false}
  function setStatus(v){document.getElementById('gtStatus').textContent=v}
  function update(){
    document.getElementById('gtPoints').textContent=String(points.length);
    document.getElementById('gtDistance').textContent=totalKm.toFixed(2)+' km';
    document.getElementById('gtStart').textContent=recording?(paused?'▶ Resume':'■ Tracking'):'▶ Start tracking';
    document.getElementById('gtStart').disabled=recording&&!paused;
    document.getElementById('gtPause').disabled=!recording;
  }
  function stopWatch(){if(watchId!==null && navigator.geolocation){navigator.geolocation.clearWatch(watchId);watchId=null}}
  function onPosition(pos){
    const c=pos.coords, lat=Number(c.latitude), lng=Number(c.longitude);
    if(!Number.isFinite(lat)||!Number.isFinite(lng)) return;
    document.getElementById('gtAccuracy').textContent=(Number(c.accuracy)?'±'+Math.round(c.accuracy)+' m':'—');
    if(!recording||paused) return;
    const ll=L.latLng(lat,lng);
    const last=points[points.length-1];
    if(last){
      const d=last.distanceTo(ll)/1000;
      if(d<0.001) return;
      totalKm+=d;
    }
    points.push(ll);
    if(line) map.removeLayer(line);
    line=L.polyline(points,{color:'#29e6ff',weight:4,opacity:.9}).addTo(map);
    userLocationMarker && userLocationMarker.setLatLng(ll);
    userLocationAccuracy && userLocationAccuracy.setLatLng(ll);
    update();
  }
  function onError(err){
    console.warn('GPS track:',err);
    if(err.code===1){setStatus('PERMISSION NEEDED');toast('Allow location permission to start GPS tracking.');}
    else setStatus('GPS UNAVAILABLE');
    stopWatch(); recording=false; paused=false; update();
  }
  function start(){
    open();
    if(!navigator.geolocation){toast('Geolocation is not available in this browser');return}
    if(recording && paused){paused=false;setStatus('TRACKING');update();return}
    if(recording)return;
    points=[];totalKm=0;if(line){map.removeLayer(line);line=null}
    recording=true;paused=false;setStatus('TRACKING');update();
    watchId=navigator.geolocation.watchPosition(onPosition,onError,{enableHighAccuracy:true,maximumAge:2000,timeout:10000});
    toast('Live GPS tracking started');
  }
  function pause(){if(!recording)return;paused=!paused;setStatus(paused?'PAUSED':'TRACKING');update();toast(paused?'GPS track paused':'GPS track resumed')}
  function clear(){stopWatch();recording=false;paused=false;points=[];totalKm=0;if(line){map.removeLayer(line);line=null}setStatus('READY');update();toast('GPS track cleared')}
  launch.onclick=open; document.getElementById('gtClose').onclick=()=>{panel.hidden=true};
  document.getElementById('gtStart').onclick=start; document.getElementById('gtPause').onclick=pause; document.getElementById('gtClear').onclick=clear;
  window.MapXTrackRecorder={getTrack:()=>points.map((ll,i)=>({lat:ll.lat,lng:ll.lng,index:i})),getDistanceKm:()=>totalKm,isRecording:()=>recording,isPaused:()=>paused,open};
  window.addEventListener('beforeunload',stopWatch); update();
})();

/* ===== NEXT STAGE: WORLD GPS COMMAND CENTER ===== */
(function worldCommandCenter(){
 const $=id=>document.getElementById(id), panel=$('commandCenter'); if(!panel)return;
 const open=()=>{panel.hidden=false; sync();}; const close=()=>panel.hidden=true;
 $('commandCenterBtn')?.addEventListener('click',open); $('ccClose')?.addEventListener('click',close);
 $('ccLocate')?.addEventListener('click',()=>{ $('locateMap')?.click(); open(); });
 $('ccTrackBtn')?.addEventListener('click',()=>{ const b=$('gpsTrackLaunch'); if(b)b.click(); });
 $('ccNavBtn')?.addEventListener('click',()=>{ $('routeBtn')?.click(); });
 $('ccReset')?.addEventListener('click',()=>{ try{map.setView([11.0168,76.9558],13)}catch(e){} toast('Command center view reset'); sync(); });
 $('ccExport')?.addEventListener('click',()=>{ const data={exportedAt:new Date().toISOString(),gps:window.__mapxLastGps||null,commandCenter:'MapXplorer World GPS Command Center'}; const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='mapxplorer-trip-session.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); toast('Trip session exported'); });
 function sync(){ const g=window.__mapxLastGps; if(g){$('ccGps').textContent='ACTIVE';$('ccCoord').textContent=g.lat.toFixed(5)+', '+g.lng.toFixed(5);$('ccAccuracy').textContent=g.accuracy?('±'+Math.round(g.accuracy)+' m'):'—';$('ccSpeed').textContent=Number.isFinite(g.speed)?Math.max(0,g.speed*3.6).toFixed(1)+' km/h':'0 km/h';$('ccHeading').textContent=Number.isFinite(g.heading)?Math.round(g.heading)+'°':'—';$('ccAltitude').textContent=Number.isFinite(g.altitude)?Math.round(g.altitude)+' m':'—';} }
 window.addEventListener('mapx:gps',e=>{const c=e.detail?.coords;if(c){window.__mapxLastGps={lat:c.latitude,lng:c.longitude,accuracy:c.accuracy,speed:c.speed,heading:c.heading,altitude:c.altitude};sync();}});
 setInterval(()=>{if(!panel.hidden){sync();$('ccTime').textContent=new Date().toLocaleTimeString(); const pts=$('gtPoints'),dist=$('gtDistance'); if(pts)$('ccTrackPoints').textContent=pts.textContent+' points'; if(dist)$('ccTrack').textContent=dist.textContent;}},1000);
})();

/* ===== NEXT STAGE: SMART WAYPOINT NAVIGATOR ===== */
(function smartWaypointNavigator(){
 const $=id=>document.getElementById(id), panel=$('waypointPanel'); if(!panel || typeof L==='undefined' || typeof map==='undefined') return;
 let adding=false, stops=[], markers=[], routeLayer=null;
 const status=t=>{if($('wpStatus'))$('wpStatus').textContent=t};
 function render(){
   const list=$('wpList'); if(!list)return; list.innerHTML='';
   stops.forEach((p,i)=>{const row=document.createElement('div');row.className='wp-item';const s=document.createElement('span');s.textContent=(i+1)+'. '+p.lat.toFixed(5)+', '+p.lng.toFixed(5);const b=document.createElement('button');b.textContent='×';b.title='Remove stop';b.onclick=()=>removeStop(i);row.append(s,b);list.appendChild(row);});
   if(!stops.length) list.innerHTML='<div class="muted">No stops yet.</div>';
 }
 function clearRoute(){if(routeLayer){map.removeLayer(routeLayer);routeLayer=null}}
 function clearMarkers(){markers.forEach(m=>map.removeLayer(m));markers=[]}
 function removeStop(i){stops.splice(i,1); if(markers[i]){map.removeLayer(markers[i]);markers.splice(i,1)}; clearRoute(); render(); status('READY')}
 function addStop(latlng){if(stops.length>=20){status('MAX 20 STOPS');return} stops.push({lat:latlng.lat,lng:latlng.lng}); const m=L.marker(latlng,{title:'Waypoint '+stops.length}).addTo(map); markers.push(m); render(); status(stops.length+' STOP'+(stops.length===1?'':'S')+' READY')}
 map.on('click',e=>{if(adding){addStop(e.latlng)}});
 $('wpAdd')?.addEventListener('click',()=>{adding=!adding;status(adding?'CLICK MAP TO ADD STOPS':'ADD MODE OFF');$('wpAdd').textContent=adding?'✓ Adding stops':'＋ Add stops'});
 $('wpClose')?.addEventListener('click',()=>panel.hidden=true);
 $('wpClear')?.addEventListener('click',()=>{stops=[];clearMarkers();clearRoute();render();status('CLEARED');$('wpDistance').textContent='Distance —';$('wpEta').textContent='ETA —';});
 $('routeBtn')?.addEventListener('dblclick',()=>{panel.hidden=false});
 function route(){
   if(stops.length<2){status('ADD AT LEAST 2 STOPS');return}
   status('CALCULATING…'); clearRoute();
   const coords=stops.map(p=>p.lng+','+p.lat).join(';');
   fetch('https://router.project-osrm.org/route/v1/driving/'+coords+'?overview=full&geometries=geojson&steps=true')
    .then(r=>r.ok?r.json():Promise.reject(new Error('Routing service unavailable')))
    .then(data=>{const r=data.routes?.[0];if(!r)throw new Error('No route');routeLayer=L.geoJSON(r.geometry,{style:{weight:6,opacity:.9}}).addTo(map);map.fitBounds(routeLayer.getBounds(),{padding:[40,40]});$('wpDistance').textContent='Distance '+(r.distance/1000).toFixed(1)+' km';$('wpEta').textContent='ETA '+Math.round(r.duration/60)+' min';status('ROUTE READY');})
    .catch(e=>{console.warn(e);status('ROUTE UNAVAILABLE');toast('Could not calculate this route right now. Check your internet connection.');});
 }
 $('wpRoute')?.addEventListener('click',route);
 $('commandCenterBtn')?.addEventListener('contextmenu',e=>{e.preventDefault();panel.hidden=false;render()});
 window.MapXWaypointNavigator={open:()=>{panel.hidden=false;render()},addStop,route,clear:()=>{$('wpClear')?.click()},getStops:()=>stops.map(p=>({lat:p.lat,lng:p.lng})),loadStops:(arr)=>{stops=[];clearMarkers();clearRoute();(Array.isArray(arr)?arr:[]).slice(0,20).forEach(p=>{if(Number.isFinite(p?.lat)&&Number.isFinite(p?.lng)) addStop(L.latLng(p.lat,p.lng));});render();status(stops.length+' STOPS LOADED')}};
 render();
})();


/* ===== NEXT STAGE: TRIP MANAGER ===== */
(function tripManager(){
 const $=id=>document.getElementById(id), panel=$('tripManager'); if(!panel)return;
 const KEY='mapxplorer_trip_library_v1';
 let trips=[];
 try{trips=JSON.parse(localStorage.getItem(KEY)||'[]'); if(!Array.isArray(trips))trips=[];}catch(e){trips=[];}
 function persist(){localStorage.setItem(KEY,JSON.stringify(trips));}
 function open(){panel.hidden=false;render();}
 function esc(s){return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));}
 function currentTrip(){
   const stops=window.MapXWaypointNavigator?.getStops?.()||[];
   const gps=window.__mapxLastGps||null;
   const center=typeof map!=='undefined' ? map.getCenter() : null;
   return {name:($('tripName').value.trim()||('Trip '+new Date().toLocaleString())),createdAt:new Date().toISOString(),stops,gps:gps?{lat:gps.lat,lng:gps.lng}:null,center:center?{lat:center.lat,lng:center.lng}:null,zoom:typeof map!=='undefined'?map.getZoom():null};
 }
 function render(){
   const list=$('tripList'); if(!list)return;
   if(!trips.length){list.innerHTML='<div class="muted">No saved trips yet. Add waypoints, then save a trip.</div>';return;}
   list.innerHTML=trips.map((t,i)=>{const n=Number(t.stops?.length||0); const date=new Date(t.createdAt||Date.now()).toLocaleString(); return '<article class="trip-card"><div><b>'+esc(t.name||'Unnamed Trip')+'</b><small>'+n+' waypoint'+(n===1?'':'s')+' · '+esc(date)+'</small></div><div class="trip-card-actions"><button data-load="'+i+'">Open</button><button data-delete="'+i+'" class="danger">Delete</button></div></article>';}).join('');
   list.querySelectorAll('[data-load]').forEach(b=>b.addEventListener('click',()=>load(Number(b.dataset.load))));
   list.querySelectorAll('[data-delete]').forEach(b=>b.addEventListener('click',()=>{trips.splice(Number(b.dataset.delete),1);persist();render();}));
 }
 function load(i){const t=trips[i];if(!t)return; if(window.MapXWaypointNavigator?.loadStops)window.MapXWaypointNavigator.loadStops(t.stops||[]); if(t.center&&typeof map!=='undefined'){map.setView([t.center.lat,t.center.lng],t.zoom||13);} panel.hidden=true; toast('Loaded '+(t.name||'trip'));}
 $('tripManagerBtn')?.addEventListener('click',open); $('commandCenterBtn')?.addEventListener('dblclick',open); $('tripClose')?.addEventListener('click',()=>panel.hidden=true);
 $('tripSave')?.addEventListener('click',()=>{trips.unshift(currentTrip());persist();$('tripName').value='';render();toast('Trip saved locally');});
 $('tripExport')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),trips},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mapxplorer-trip-library.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);});
 $('tripImportBtn')?.addEventListener('click',()=>$('tripImport')?.click());
 $('tripImport')?.addEventListener('change',e=>{const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);const incoming=Array.isArray(data)?data:data.trips;if(!Array.isArray(incoming))throw new Error('Invalid library');trips=incoming.filter(t=>t&&typeof t==='object').slice(0,100);persist();render();toast('Trip library imported');}catch(err){toast('Invalid trip library file');}e.target.value='';};reader.readAsText(file);});
 render();
})();


/* ===== NEXT STAGE: WORLD TRIP REPLAY & JOURNEY HISTORY ===== */
(function tripReplay(){
  const wrap=document.getElementById('mapWrap');
  if(!wrap || typeof L==='undefined' || typeof map==='undefined' || document.getElementById('tripReplayPanel')) return;
  const launch=document.createElement('button');
  launch.id='tripReplayLaunch'; launch.className='gps-track-launch replay-launch'; launch.textContent='▶ Journey Replay';
  wrap.appendChild(launch);
  const panel=document.createElement('section');
  panel.id='tripReplayPanel'; panel.className='gps-track-panel trip-replay-panel'; panel.hidden=true;
  panel.innerHTML=`<div class="gt-head"><div><h3>▶ Journey Replay</h3><small>Replay the GPS journey recorded in this page session</small></div><button id="trClose" class="gt-close" aria-label="Close">×</button></div>
  <div class="gt-stats"><div><span>POINTS</span><b id="trPoints">0</b></div><div><span>DISTANCE</span><b id="trDistance">0.00 km</b></div><div><span>ELAPSED</span><b id="trElapsed">0:00</b></div><div><span>PROGRESS</span><b id="trProgress">0%</b></div></div>
  <div class="tr-timeline"><input id="trSeek" type="range" min="0" max="0" value="0" step="1" aria-label="Replay position"></div>
  <div class="gt-actions"><button id="trPlay" class="primary">▶ Play</button><button id="trPause">Ⅱ Pause</button><button id="trReset">↺ Reset</button><select id="trSpeed" aria-label="Replay speed"><option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option><option value="4">4×</option></select></div>
  <div class="tr-actions"><button id="trSave">💾 Save Journey</button><button id="trExport">⇩ Export Journey</button><button id="trHistory">🕘 History</button></div>
  <div id="trStatus" class="status">NO TRACK LOADED</div><div id="trHistoryList" class="trip-list"></div></section>`;
  wrap.appendChild(panel);
  let points=[], replayMarker=null, replayLine=null, playing=false, timer=null, index=0, history=[];
  const KEY='mapxplorer_journey_history_v1';
  try{history=JSON.parse(localStorage.getItem(KEY)||'[]');if(!Array.isArray(history))history=[];}catch(e){history=[]}
  const $=id=>document.getElementById(id);
  const fmtTime=sec=>{sec=Math.max(0,Math.floor(sec));return Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0')};
  const distance=pts=>{let d=0;for(let i=1;i<pts.length;i++)d+=L.latLng(pts[i-1].lat,pts[i-1].lng).distanceTo(L.latLng(pts[i].lat,pts[i].lng));return d/1000};
  const open=()=>{panel.hidden=false;loadCurrent();};
  function clearVisual(){if(replayMarker){map.removeLayer(replayMarker);replayMarker=null}if(replayLine){map.removeLayer(replayLine);replayLine=null}}
  function stop(){playing=false;if(timer){clearInterval(timer);timer=null}updateButtons()}
  function updateButtons(){$('trPlay').disabled=playing||points.length<2;$('trPause').disabled=!playing;$('trSeek').disabled=points.length<2}
  function render(){
    const d=distance(points); $('trPoints').textContent=String(points.length);$('trDistance').textContent=d.toFixed(2)+' km';$('trSeek').max=Math.max(0,points.length-1);$('trSeek').value=index; $('trProgress').textContent=points.length?Math.round(index/(points.length-1)*100)+'%':'0%'; $('trElapsed').textContent=points.length?fmtTime(index):'0:00';
    if(points.length){const visible=points.slice(0,index+1).map(p=>[p.lat,p.lng]);if(replayLine)map.removeLayer(replayLine);replayLine=L.polyline(visible,{weight:5,opacity:.65}).addTo(map);const p=points[index];if(!replayMarker)replayMarker=L.circleMarker([p.lat,p.lng],{radius:8,weight:3}).addTo(map);else replayMarker.setLatLng([p.lat,p.lng]);}
    updateButtons();
  }
  function loadCurrent(){stop();clearVisual();const t=window.MapXTrackRecorder?.getTrack?.()||[];points=t;index=0;$('trStatus').textContent=points.length>1?'TRACK READY':'NO TRACK LOADED';render();}
  function play(){if(points.length<2){loadCurrent();if(points.length<2){toast('Record a GPS journey first');return}}if(index>=points.length-1)index=0;playing=true;updateButtons();$('trStatus').textContent='REPLAYING';const speed=Number($('trSpeed').value)||1;timer=setInterval(()=>{index++;render();if(index>=points.length-1){stop();$('trStatus').textContent='REPLAY COMPLETE'}},Math.max(50,700/speed))}
  function pause() {stop();$('trStatus').textContent='REPLAY PAUSED'}
  function reset(){stop();index=0;$('trStatus').textContent=points.length>1?'TRACK READY':'NO TRACK LOADED';render()}
  function save(){if(points.length<2){toast('Record a journey before saving');return}const item={id:Date.now(),name:'Journey '+new Date().toLocaleString(),createdAt:new Date().toISOString(),points,distanceKm:distance(points)};history.unshift(item);history=history.slice(0,30);localStorage.setItem(KEY,JSON.stringify(history));renderHistory();window.dispatchEvent(new CustomEvent('mapx:journey-saved'));toast('Journey saved to history')}
  function exportJourney(){if(points.length<2){toast('No journey to export');return}const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),points,distanceKm:distance(points)},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mapxplorer-journey.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
  function renderHistory(){const box=$('trHistoryList');if(!box)return;if(!history.length){box.innerHTML='<div class="muted">No saved journeys.</div>';return}box.innerHTML=history.slice(0,10).map((h,i)=>`<article class="trip-card"><div><b>${String(h.name||'Journey').replace(/[&<>\"]/g,'')}</b><small>${(h.distanceKm||0).toFixed(2)} km · ${new Date(h.createdAt||Date.now()).toLocaleString()}</small></div><div class="trip-card-actions"><button data-rload="${i}">Replay</button><button data-rdel="${i}" class="danger">Delete</button></div></article>`).join('');box.querySelectorAll('[data-rload]').forEach(b=>b.onclick=()=>{const h=history[Number(b.dataset.rload)];if(h){stop();clearVisual();points=Array.isArray(h.points)?h.points:[];index=0;$('trStatus').textContent='HISTORY TRACK READY';render()}});box.querySelectorAll('[data-rdel]').forEach(b=>b.onclick=()=>{history.splice(Number(b.dataset.rdel),1);localStorage.setItem(KEY,JSON.stringify(history));renderHistory()})}
  launch.onclick=open;$('trClose').onclick=()=>{stop();panel.hidden=true};$('trPlay').onclick=play;$('trPause').onclick=pause;$('trReset').onclick=reset;$('trSave').onclick=save;$('trExport').onclick=exportJourney;$('trHistory').onclick=renderHistory;$('trSeek').oninput=e=>{stop();index=Number(e.target.value)||0;$('trStatus').textContent='SEEKING';render()};$('trSpeed').onchange=()=>{if(playing){stop();play()}};
  window.MapXTripReplay={open,loadCurrent,play,pause,reset,getHistory:()=>history,loadHistory:(item)=>{if(!item)return;stop();clearVisual();points=Array.isArray(item.points)?item.points:[];index=0;$('trStatus').textContent='HISTORY TRACK READY';render()}};
  window.addEventListener('mapx:loadJourney',e=>{if(e.detail)window.MapXTripReplay?.loadHistory?.(e.detail)});
  renderHistory();updateButtons();
})();


/* ===== NEXT STAGE: WORLD JOURNEY ANALYTICS ===== */
(function journeyAnalytics(){
  const wrap=document.getElementById('mapWrap');
  if(!wrap || document.getElementById('journeyAnalyticsPanel')) return;
  const launch=document.createElement('button');
  launch.id='journeyAnalyticsLaunch'; launch.className='gps-track-launch analytics-launch'; launch.textContent='◔ Journey Analytics';
  wrap.appendChild(launch);
  const panel=document.createElement('section');
  panel.id='journeyAnalyticsPanel'; panel.className='gps-track-panel journey-analytics-panel'; panel.hidden=true;
  panel.innerHTML=`<div class="gt-head"><div><h3>◔ Journey Analytics</h3><small>Understand your saved GPS journeys at a glance</small></div><button id="jaClose" class="gt-close" aria-label="Close">×</button></div>
  <div class="gt-stats"><div><span>JOURNEYS</span><b id="jaJourneys">0</b></div><div><span>TOTAL DISTANCE</span><b id="jaTotal">0.00 km</b></div><div><span>AVERAGE</span><b id="jaAverage">0.00 km</b></div><div><span>LONGEST</span><b id="jaLongest">0.00 km</b></div></div>
  <div class="ja-section"><div class="ja-section-head"><b>Distance by journey</b><button id="jaRefresh">↻ Refresh</button></div><div id="jaBars" class="ja-bars"><div class="muted">No saved journeys yet.</div></div></div>
  <div class="ja-section"><div class="ja-section-head"><b>Journey history</b><button id="jaReplayLatest">▶ Replay latest</button></div><div id="jaList" class="trip-list"><div class="muted">No saved journeys yet.</div></div></div>
  <div class="gt-note">Analytics are calculated from journeys saved in this browser. Nothing is uploaded by this feature.</div>`;
  wrap.appendChild(panel);
  const $=id=>document.getElementById(id);
  const KEY='mapxplorer_journey_history_v1';
  const read=()=>{try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x.filter(v=>v&&typeof v==='object'):[]}catch(e){return[]}};
  const esc=v=>String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function render(){
    const data=read();
    const ds=data.map(x=>Number(x.distanceKm)||0);
    const total=ds.reduce((a,b)=>a+b,0), avg=ds.length?total/ds.length:0, longest=ds.length?Math.max(...ds):0;
    $('jaJourneys').textContent=String(data.length); $('jaTotal').textContent=total.toFixed(2)+' km'; $('jaAverage').textContent=avg.toFixed(2)+' km'; $('jaLongest').textContent=longest.toFixed(2)+' km';
    const top=data.slice(0,10), max=Math.max(0,...top.map(x=>Number(x.distanceKm)||0));
    $('jaBars').innerHTML=top.length?top.map((x,i)=>{const d=Number(x.distanceKm)||0,w=max?Math.max(4,d/max*100):0;return `<div class="ja-bar-row"><span title="${esc(x.name||('Journey '+(i+1)))}">${esc(x.name||('Journey '+(i+1)))}</span><div class="ja-bar-track"><i style="width:${w.toFixed(1)}%"></i></div><b>${d.toFixed(2)} km</b></div>`}).join(''):'<div class="muted">No saved journeys yet.</div>';
    $('jaList').innerHTML=top.length?top.map((x,i)=>`<article class="trip-card"><div><b>${esc(x.name||'Journey')}</b><small>${(Number(x.distanceKm)||0).toFixed(2)} km · ${esc(new Date(x.createdAt||Date.now()).toLocaleString())}</small></div><div class="trip-card-actions"><button data-ja-replay="${i}">Replay</button></div></article>`).join(''):'<div class="muted">Save a journey from Journey Replay to see it here.</div>';
    $('jaList').querySelectorAll('[data-ja-replay]').forEach(b=>b.onclick=()=>{const item=top[Number(b.dataset.jaReplay)];if(item&&window.MapXTripReplay){window.MapXTripReplay.open();setTimeout(()=>{try{window.MapXTripReplay.loadHistory?.(item)}catch(e){}} ,0)}});
  }
  function open(){panel.hidden=false;render()}
  launch.onclick=open; $('journeyAnalyticsBtn')?.addEventListener('click',open); $('jaClose').onclick=()=>panel.hidden=true; $('jaRefresh').onclick=render;
  $('jaReplayLatest').onclick=()=>{const h=read()[0];if(!h){toast('No saved journeys yet');return}if(window.MapXTripReplay){window.MapXTripReplay.open();window.dispatchEvent(new CustomEvent('mapx:loadJourney',{detail:h}));}};
  window.addEventListener('mapx:journey-saved',render); window.addEventListener('storage',e=>{if(e.key===KEY)render()});
  window.MapXJourneyAnalytics={open,refresh:render,getSummary:()=>{const d=read().map(x=>Number(x.distanceKm)||0);return{journeys:d.length,totalKm:d.reduce((a,b)=>a+b,0),averageKm:d.length?d.reduce((a,b)=>a+b,0)/d.length:0,longestKm:d.length?Math.max(...d):0}}};
  render();
})();

/* ===== NEXT STAGE: WORLD LIVE TRIP TELEMETRY ===== */
(function worldLiveTelemetry(){
  const wrap=document.getElementById('mapWrap');
  if(!wrap || document.getElementById('liveTelemetryPanel')) return;
  const launch=document.createElement('button');
  launch.id='liveTelemetryLaunch'; launch.className='gps-track-launch telemetry-launch'; launch.textContent='📊 Live Telemetry';
  wrap.appendChild(launch);
  const panel=document.createElement('section');
  panel.id='liveTelemetryPanel'; panel.className='telemetry-panel'; panel.hidden=true;
  panel.innerHTML=`<button id="ltClose" class="telemetry-close" aria-label="Close">×</button><div class="eyebrow">MAPX LIVE SYSTEM</div><h3>World Live Trip Telemetry</h3><div class="telemetry-state" id="ltState">GPS WAITING</div>
  <div class="telemetry-grid"><div class="telemetry-card"><span>SPEED</span><b id="ltSpeed">0.0 km/h</b><small>Current device speed</small></div><div class="telemetry-card"><span>HEADING</span><b id="ltHeading">—</b><small>Direction of travel</small></div><div class="telemetry-card"><span>ALTITUDE</span><b id="ltAltitude">—</b><small>GPS altitude</small></div><div class="telemetry-card"><span>ACCURACY</span><b id="ltAccuracy">—</b><small>Location estimate</small></div><div class="telemetry-card"><span>TRIP DISTANCE</span><b id="ltDistance">0.00 km</b><small id="ltPoints">0 GPS points</small></div><div class="telemetry-card"><span>GPS POSITION</span><b id="ltCoords">—</b><small>Latitude / longitude</small></div></div>
  <div class="telemetry-card" style="margin-top:10px"><span>ROUTE PROGRESS</span><b id="ltProgressText">Not navigating</b><div class="telemetry-progress"><i id="ltProgress"></i></div><small id="ltEta">Start a route to show progress.</small></div>
  <div class="telemetry-actions"><button id="ltStart" class="active">◎ Start GPS</button><button id="ltStop">■ Stop GPS</button><button id="ltCenter">⌖ Center Map</button><button id="ltReset">↺ Reset Trip</button></div>
  <div class="telemetry-note">Telemetry is calculated in your browser from device GPS and the current MapX session. It does not track other people or devices.</div>`;
  wrap.appendChild(panel);
  const $=id=>document.getElementById(id); let watchId=null,last=null,total=0,points=0;
  const dist=(a,b)=>{try{return L.latLng(a.lat,a.lng).distanceTo(L.latLng(b.lat,b.lng))/1000}catch(e){return 0}};
  function update(g){
    const now={lat:Number(g.coords.latitude),lng:Number(g.coords.longitude),accuracy:g.coords.accuracy,speed:g.coords.speed,heading:g.coords.heading,altitude:g.coords.altitude};
    if(last) total+=dist(last,now); last=now; points++;
    window.__mapxLastGps=now;
    $('ltState').textContent='GPS ACTIVE'; $('ltState').style.color='#62f6b4'; $('ltSpeed').textContent=Number.isFinite(now.speed)?Math.max(0,now.speed*3.6).toFixed(1)+' km/h':'0.0 km/h'; $('ltHeading').textContent=Number.isFinite(now.heading)?Math.round(now.heading)+'°':'—'; $('ltAltitude').textContent=Number.isFinite(now.altitude)?Math.round(now.altitude)+' m':'—'; $('ltAccuracy').textContent=Number.isFinite(now.accuracy)?'±'+Math.round(now.accuracy)+' m':'—'; $('ltDistance').textContent=total.toFixed(2)+' km'; $('ltPoints').textContent=points+' GPS points'; $('ltCoords').textContent=now.lat.toFixed(5)+', '+now.lng.toFixed(5);
    const route=window.__mapxRouteTelemetry; if(route&&Number.isFinite(route.progress)){const p=Math.max(0,Math.min(100,route.progress));$('ltProgress').style.width=p+'%';$('ltProgressText').textContent=p.toFixed(0)+'% complete';$('ltEta').textContent=route.etaText||'Route active';}
  }
  function error(e){$('ltState').textContent=e&&e.code===1?'GPS PERMISSION NEEDED':'GPS UNAVAILABLE';$('ltState').style.color='#ffb46b';}
  function start(){if(!navigator.geolocation){error({code:2});return}if(watchId!==null)navigator.geolocation.clearWatch(watchId);$('ltState').textContent='REQUESTING GPS…';watchId=navigator.geolocation.watchPosition(update,error,{enableHighAccuracy:true,maximumAge:2000,timeout:10000});}
  function stop(){if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null}$('ltState').textContent='GPS PAUSED';$('ltState').style.color='#ffd166'}
  function center(){if(last&&window.map){map.setView([last.lat,last.lng],Math.max(map.getZoom(),16),{animate:true});}else if(window.__mapxLastGps&&window.map){map.setView([window.__mapxLastGps.lat,window.__mapxLastGps.lng],16,{animate:true});}else start()}
  function reset(){total=0;points=0;last=null;$('ltDistance').textContent='0.00 km';$('ltPoints').textContent='0 GPS points';$('ltCoords').textContent='—';$('ltSpeed').textContent='0.0 km/h';$('ltHeading').textContent='—';$('ltAltitude').textContent='—';$('ltAccuracy').textContent='—';$('ltProgress').style.width='0%';$('ltProgressText').textContent='Not navigating';$('ltEta').textContent='Start a route to show progress.'}
  function open(){panel.hidden=false;if(!last)start()}
  launch.onclick=open;$('ltClose').onclick=()=>{panel.hidden=true};$('ltStart').onclick=start;$('ltStop').onclick=stop;$('ltCenter').onclick=center;$('ltReset').onclick=reset;
  window.MapXLiveTelemetry={open,start,stop,reset,getSnapshot:()=>({gps:last,distanceKm:total,points})};
  window.addEventListener('mapx:route-progress',e=>{window.__mapxRouteTelemetry=e.detail||null;if(!panel.hidden)update({coords:{latitude:last?.lat||0,longitude:last?.lng||0,accuracy:last?.accuracy||0},speed:last?.speed,heading:last?.heading,altitude:last?.altitude})});
})();

/* ===== NEXT STAGE: WORLD SMART NAVIGATION AI ===== */
(function worldSmartNavigationAI(){
  if(window.__mapxSmartAI)return; window.__mapxSmartAI=true;
  const wrap=document.getElementById('mapWrap'); if(!wrap)return;
  const launch=document.createElement('button'); launch.id='smartAiLaunch'; launch.className='smart-ai-launch'; launch.type='button'; launch.textContent='🤖 Smart Nav AI'; wrap.appendChild(launch);
  const panel=document.createElement('section'); panel.id='smartAiPanel'; panel.className='smart-ai-panel'; panel.hidden=true;
  panel.innerHTML=`<div class="sai-head"><div class="sai-orb">AI</div><div><h3>World Smart Navigation AI</h3><small>Navigation copilot · GPS-aware · local intelligence</small><span id="saiStatus" class="sai-status">STANDBY</span></div><button id="saiClose" class="sai-close" aria-label="Close">×</button></div>
  <div class="sai-grid"><div class="sai-card"><span>DESTINATION</span><b id="saiDestination">Not selected</b></div><div class="sai-card"><span>GPS</span><b id="saiGps">Waiting</b></div><div class="sai-card"><span>ROUTE</span><b id="saiRoute">Not active</b></div><div class="sai-card"><span>PROGRESS</span><b id="saiProgress">0%</b></div></div>
  <div id="saiMessage" class="sai-message">I can help manage your current map navigation. Select a destination, then ask me to start navigation, recenter, or explain your route.</div>
  <div class="sai-quick"><button data-cmd="start navigation">▶ Start navigation</button><button data-cmd="recenter">◎ Recenter</button><button data-cmd="route status">📡 Route status</button><button data-cmd="voice on">🔊 Voice</button></div>
  <div class="sai-input"><input id="saiInput" placeholder="Ask Smart Nav AI…" autocomplete="off"><button id="saiSend" aria-label="Send">➤</button></div>
  <div class="sai-actions"><button id="saiFollow">◎ Follow GPS</button><button id="saiSpeak">🔊 Speak</button><button id="saiStop">■ Stop navigation</button></div>
  <div id="saiNote" class="sai-note">This copilot uses the browser GPS and the navigation data already available in MapXplorer. It does not track other devices.</div>`;
  wrap.appendChild(panel);
  const $=id=>document.getElementById(id);
  let follow=false, lastPosition=null, lastMessage='Navigation ready.';
  const destination=()=>window.__mapxDestination||null;
  const nav=()=>window.mapxWorldNavPro||null;
  function open(){panel.hidden=false;update();}
  function close(){panel.hidden=true}
  function say(text){lastMessage=text;$('saiMessage').textContent=text;if('speechSynthesis'in window){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=.96;speechSynthesis.speak(u)}catch{}}}
  function update(){const d=destination();$('saiDestination').textContent=d?.name||'Not selected';const routeStatus=document.getElementById('wnpStatus')?.textContent||'';const progress=document.getElementById('wnpProgress')?.style.width||'0%';$('saiRoute').textContent=routeStatus||'Not active';$('saiProgress').textContent=progress||'0%';$('saiGps').textContent=lastPosition?'LIVE':'Waiting';const note=document.getElementById('wnpNote')?.textContent;if(note&&/rerout|error|unavailable|permission/i.test(note)){$('saiNote').textContent=note;$('saiNote').className='sai-note sai-warn'}else{$('saiNote').textContent=follow?'Follow mode is active. The map will stay centered on your GPS position.':'GPS and route status are read from the navigation layer.';$('saiNote').className='sai-note'} }
  function execute(raw){const q=String(raw||'').toLowerCase().trim();if(!q)return;
    const n=nav(); const d=destination();
    if(/start|navigate|begin/.test(q)&&/nav|route|trip|drive|go/.test(q)||q==='start navigation'){if(!d){say('Select a destination first, then I can start navigation.');return} if(n?.start){n.start();$('saiStatus').textContent='LIVE';say(`Starting navigation to ${d.name}. GPS and route guidance are active.`)}else say('The navigation module is not available right now.');}
    else if(/recenter|locate|where am i|my location/.test(q)){const b=document.getElementById('locateMap');if(b)b.click();follow=true;update();say('Recenter requested. I will follow your device GPS when a location fix is available.');}
    else if(/stop|pause/.test(q)){n?.stop?.();follow=false;$('saiStatus').textContent='PAUSED';say('Navigation paused. Your GPS session is not being shared with another device.');}
    else if(/voice|speak|sound/.test(q)){const on=document.getElementById('wnpVoice');if(on&&!/off|disable|mute/.test(q)&&on.textContent.includes('Voice Off'))on.click();else if(on&&/off|disable|mute/.test(q)&&on.textContent.includes('Voice On'))on.click();say('Voice guidance setting updated.');}
    else if(/status|progress|how far|eta|route/.test(q)){update();const dist=document.getElementById('wnpDistance')?.textContent||'unknown';const eta=document.getElementById('wnpEta')?.textContent||'unknown';const route=document.getElementById('wnpStatus')?.textContent||'not active';say(`Route status: ${route}. Remaining distance: ${dist}. ETA: ${eta}.`);}
    else if(/3d|hyper/.test(q)){document.getElementById('threeD')?.click();say('Hyper 3D mode toggled.');}
    else if(/traffic/.test(q)){document.getElementById('trafficPanel')?.scrollIntoView({behavior:'smooth',block:'center'});say('Traffic overview opened. Note that the public OSRM routing layer does not provide live traffic data.');}
    else {say('Try “start navigation”, “recenter”, “route status”, “voice on”, or “stop navigation”.');}
    update();
  }
  launch.onclick=open;$('saiClose').onclick=close;$('saiSend').onclick=()=>{const v=$('saiInput').value.trim();$('saiInput').value='';execute(v)};$('saiInput').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('saiSend').click()}};
  document.querySelectorAll('.sai-quick button').forEach(b=>b.onclick=()=>execute(b.dataset.cmd));
  $('saiFollow').onclick=()=>{follow=!follow;$('saiFollow').textContent=follow?'◎ Following GPS':'◎ Follow GPS';const r=document.getElementById('wnpRecenter');if(r){r.dataset.follow=follow?'1':'0';if(follow)r.click()}update();say(follow?'Follow GPS enabled.':'Follow GPS disabled.');};
  $('saiSpeak').onclick=()=>say(lastMessage);$('saiStop').onclick=()=>execute('stop navigation');
  const originalGeo=navigator.geolocation?.watchPosition;
  if(navigator.geolocation&&originalGeo){try{navigator.geolocation.watchPosition(p=>{lastPosition=p;update() },()=>{$('saiGps').textContent='ERROR';update()},{enableHighAccuracy:true,maximumAge:5000,timeout:12000})}catch{}}
  setInterval(()=>{if(!panel.hidden)update()},1000);
  window.MapXSmartNavigationAI={open,close,execute,update};
  window.addEventListener('mapx:navigation-start',update);
})();

// WORLD NAVIGATION INTELLIGENCE PRO
(()=>{
  const $=id=>document.getElementById(id);
  const net=$('netState'), gps=$('gpsState'), engine=$('routeEngine'), msg=$('intelMessage'), unit=$('unitToggle');
  let imperial=false, lastFix=null, autoCenter=false;
  function network(){ if(net) net.textContent=navigator.onLine?'ONLINE':'OFFLINE'; }
  addEventListener('online',network); addEventListener('offline',network); network();
  if(unit) unit.addEventListener('click',()=>{ imperial=!imperial; unit.textContent=imperial?'MI':'KM'; msg.textContent=imperial?'Distance display preference set to miles.':'Distance display preference set to kilometres.'; });
  const speak=text=>{ if('speechSynthesis' in window){ speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(text)); } };
  const locate=()=>{ if(!navigator.geolocation){if(gps)gps.textContent='UNAVAILABLE';return;} if(gps)gps.textContent='REQUESTING'; navigator.geolocation.getCurrentPosition(p=>{lastFix=p; if(gps)gps.textContent='ACTIVE'; if($('coordReadout')) $('coordReadout').textContent=`${p.coords.latitude.toFixed(5)}, ${p.coords.longitude.toFixed(5)}`; if(autoCenter&&window.map) map.setView([p.coords.latitude,p.coords.longitude],Math.max(map.getZoom(),15)); msg.textContent=`GPS fix received ±${Math.round(p.coords.accuracy||0)} m. Navigation intelligence is active.`;},e=>{if(gps)gps.textContent='NEEDS PERMISSION'; msg.textContent='GPS permission is required for live location guidance.';},{enableHighAccuracy:true,timeout:10000,maximumAge:2000});};
  $('wakeGpsBtn')?.addEventListener('click',locate);
  $('autoCenterBtn')?.addEventListener('click',()=>{autoCenter=!autoCenter; $('autoCenterBtn').textContent=autoCenter?'◎ Auto-center ON':'◎ Auto-center'; if(autoCenter)locate();});
  $('speakStatusBtn')?.addEventListener('click',()=>{const t=lastFix?`GPS active. Latitude ${lastFix.coords.latitude.toFixed(4)}, longitude ${lastFix.coords.longitude.toFixed(4)}. Accuracy ${Math.round(lastFix.coords.accuracy||0)} metres.`:'GPS is not active yet.'; speak(t);});
  window.setInterval(()=>{ if($('intelStatus')) $('intelStatus').textContent=navigator.onLine?'ONLINE':'OFFLINE'; },3000);
})();


// Navigation Intelligence Plus: lightweight status monitor layered on the existing app.
(() => {
  const $ = id => document.getElementById(id);
  const gps = $('nipGps'), net = $('nipNet'), route = $('nipRoute'), guide = $('nipGuide'), msg = $('nipMessage'), health = $('routeHealth');
  if (!gps || !net || !route || !guide || !msg) return;
  const state = { hasGps:false, online:navigator.onLine, lastAccuracy:null };
  function paint(){
    gps.textContent = state.hasGps ? (state.lastAccuracy ? `OK ±${Math.round(state.lastAccuracy)}m` : 'OK') : 'WAITING';
    net.textContent = state.online ? 'ONLINE' : 'OFFLINE';
    route.textContent = window.currentRoute ? 'ACTIVE' : 'NONE';
    guide.textContent = window.navigationActive ? 'ACTIVE' : 'STANDBY';
    health.textContent = state.hasGps && state.online ? 'READY' : (state.online ? 'GPS WAIT' : 'OFFLINE');
    msg.textContent = !state.online ? 'Internet is unavailable. Map tiles/search/routing may be limited.' : (!state.hasGps ? 'Allow location access to enable live navigation intelligence.' : 'GPS and network are ready for navigation.');
  }
  window.addEventListener('online', () => { state.online=true; paint(); });
  window.addEventListener('offline', () => { state.online=false; paint(); });
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(pos => { state.hasGps=true; state.lastAccuracy=pos.coords.accuracy; paint(); }, () => { state.hasGps=false; paint(); }, { enableHighAccuracy:true, maximumAge:5000, timeout:10000 });
  }
  $('nipRecenter')?.addEventListener('click', () => {
    if (typeof window.locateUser === 'function') window.locateUser();
    else if (typeof window.startGPS === 'function') window.startGPS();
    msg.textContent = 'Checking your GPS position and navigation state…';
    setTimeout(paint, 1200);
  });
  paint();
})();


// WORLD NAVIGATION SAFETY & RELIABILITY CENTER
(() => {
  const $ = id => document.getElementById(id);
  const gps = $('nrGps'), fix = $('nrFix'), net = $('nrNet'), route = $('nrRoute'), health = $('nrHealth'), msg = $('nrMessage');
  if (!gps || !fix || !net || !route || !health || !msg) return;
  let lastFixAt = 0, accuracy = null, watch = null;
  const ageText = () => {
    if (!lastFixAt) return 'NO FIX';
    const sec = Math.max(0, Math.round((Date.now()-lastFixAt)/1000));
    return sec < 5 ? 'LIVE' : sec < 20 ? `${sec}s ago` : 'STALE';
  };
  function paint(){
    const online = navigator.onLine;
    net.textContent = online ? 'ONLINE' : 'OFFLINE';
    fix.textContent = ageText();
    gps.textContent = accuracy == null ? 'WAITING' : `±${Math.round(accuracy)}m`;
    route.textContent = window.currentRoute ? 'READY' : (online ? 'AVAILABLE' : 'LIMITED');
    const good = online && accuracy != null && (Date.now()-lastFixAt < 20000);
    health.textContent = good ? 'READY' : (online ? 'GPS CHECK' : 'OFFLINE');
    msg.textContent = !online
      ? 'Internet is offline. Previously loaded map content may remain available, but online search and routing can be unavailable.'
      : accuracy == null
        ? 'Allow location access and press Check GPS to establish a live position.'
        : (Date.now()-lastFixAt >= 20000
          ? 'The last GPS fix is old. Recheck your location before relying on live guidance.'
          : `GPS is responding with approximately ${Math.round(accuracy)} m accuracy.`);
  }
  function start(){
    if (!navigator.geolocation) { accuracy=null; msg.textContent='This browser does not provide Geolocation.'; paint(); return; }
    if (watch != null) navigator.geolocation.clearWatch(watch);
    gps.textContent='REQUESTING';
    watch=navigator.geolocation.watchPosition(pos=>{
      accuracy=Number.isFinite(pos.coords.accuracy)?pos.coords.accuracy:null;
      lastFixAt=Date.now();
      if (window.coordReadout) window.coordReadout.textContent=`${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`;
      paint();
    }, ()=>{ accuracy=null; msg.textContent='Location permission or GPS signal is unavailable. Check browser location permission and try again.'; paint(); }, {enableHighAccuracy:true, maximumAge:5000, timeout:12000});
  }
  $('nrCheck')?.addEventListener('click',start);
  $('nrRecenter')?.addEventListener('click',()=>{
    if (typeof window.locateUser==='function') window.locateUser();
    else if (typeof window.startGPS==='function') window.startGPS();
    start();
  });
  $('nrSpeak')?.addEventListener('click',()=>{
    const text=msg.textContent;
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(text)); } catch {} }
  });
  addEventListener('online',paint); addEventListener('offline',paint);
  setInterval(paint,3000);
  paint();
})();

// WORLD NAVIGATION DIAGNOSTICS & SESSION RECOVERY
(() => {
  const $ = id => document.getElementById(id);
  const permission = $('diagPermission'), position = $('diagPosition'), session = $('diagSession'), connection = $('diagConnection'), health = $('diagHealth'), msg = $('diagMessage');
  if (!permission || !position || !session || !connection || !health || !msg) return;
  const KEY='mapxplorer:last-gps-session';
  let last=null;
  const getSaved=()=>{ try { return JSON.parse(localStorage.getItem(KEY)||'null'); } catch { return null; } };
  function paint(){
    connection.textContent=navigator.onLine?'ONLINE':'OFFLINE';
    position.textContent=last?`${last.lat.toFixed(5)}, ${last.lng.toFixed(5)}`:'NO FIX';
    const saved=getSaved();
    session.textContent=saved?new Date(saved.savedAt).toLocaleTimeString():'NONE';
    permission.textContent='geolocation' in navigator?'AVAILABLE':'UNAVAILABLE';
    const ready=!!last && !!saved;
    health.textContent=ready?'READY':(last?'GPS OK':'CHECK');
    msg.textContent=!('geolocation' in navigator)?'This browser does not expose GPS location services.':last?`Latest GPS position captured with approximately ${Math.round(last.accuracy||0)} m accuracy.`:'No GPS fix yet. Use the GPS controls or allow location access.';
  }
  function capture(){
    if(!navigator.geolocation){paint();return;}
    navigator.geolocation.getCurrentPosition(pos=>{
      last={lat:pos.coords.latitude,lng:pos.coords.longitude,accuracy:pos.coords.accuracy||null,heading:pos.coords.heading,speed:pos.coords.speed,altitude:pos.coords.altitude,capturedAt:Date.now()};
      paint();
    },()=>{msg.textContent='GPS position could not be read. Check permission and signal, then try again.';paint();},{enableHighAccuracy:true,maximumAge:5000,timeout:12000});
  }
  $('diagSave')?.addEventListener('click',()=>{
    if(!last){capture(); setTimeout(()=>$('diagSave')?.click(),1500); return;}
    try{localStorage.setItem(KEY,JSON.stringify({...last,savedAt:Date.now()}));msg.textContent='Last GPS position saved locally in this browser.';paint();}catch{msg.textContent='Browser storage is unavailable; the session could not be saved.';}
  });
  $('diagRestore')?.addEventListener('click',()=>{
    const saved=getSaved();
    if(!saved){msg.textContent='No saved GPS session is available.';return;}
    last=saved;
    if(window.map && typeof window.map.setView==='function') window.map.setView([saved.lat,saved.lng],Math.max(window.map.getZoom?.()||14,15));
    if(typeof window.locateUser==='function') window.locateUser();
    msg.textContent='Restored the last saved GPS position. It may be stale; obtain a fresh fix before live navigation.';
    paint();
  });
  $('diagClear')?.addEventListener('click',()=>{try{localStorage.removeItem(KEY);}catch{} last=null;msg.textContent='Saved GPS session cleared from this browser.';paint();});
  addEventListener('online',paint);addEventListener('offline',paint);setInterval(paint,5000);capture();paint();
})();


// Destination Arrival Guard: local-only proximity monitoring for the user's own GPS.
let arrivalTarget=null;
let arrivalWatchId=null;
let arrivalInside=false;
function setArrivalMessage(msg){const el=$("arrivalReadout");if(el)el.textContent=msg;}
function setArrivalStatus(text, cls=""){const el=$("arrivalStatus");if(el){el.textContent=text;el.className="status "+cls;}}
function readArrivalTarget(){
  const lat=Number($("arrivalLat")?.value), lng=Number($("arrivalLng")?.value);
  if(!Number.isFinite(lat)||lat<-90||lat>90||!Number.isFinite(lng)||lng<-180||lng>180){toast("Enter a valid latitude and longitude");return null;}
  arrivalTarget={lat,lng}; return arrivalTarget;
}
function destinationFromMap(){
  const c=map.getCenter(); $("arrivalLat").value=c.lat.toFixed(6); $("arrivalLng").value=c.lng.toFixed(6); arrivalTarget={lat:c.lat,lng:c.lng};
  setArrivalStatus("READY"); setArrivalMessage(`Destination set to ${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}.`); toast("Map center selected as destination");
}
function haversineMeters(a,b){
  const R=6371000, rad=Math.PI/180, dLat=(b.lat-a.lat)*rad, dLng=(b.lng-a.lng)*rad;
  const x=Math.sin(dLat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.min(1,Math.sqrt(x)));
}
function checkArrivalPosition(pos){
  if(!arrivalTarget){setArrivalStatus("SET DESTINATION");setArrivalMessage("Choose a destination first.");return;}
  const here={lat:pos.coords.latitude,lng:pos.coords.longitude}; const distance=haversineMeters(here,arrivalTarget); const radius=Number($("arrivalRadius")?.value)||100;
  const inside=distance<=radius;
  if(inside && !arrivalInside){arrivalInside=true; setArrivalStatus("ARRIVED","ok"); setArrivalMessage(`🎉 You are within ${Math.round(distance)} m of the destination.`); toast("🎯 Destination reached"); if("speechSynthesis" in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance("You have arrived at your destination."));}}
  else if(!inside){arrivalInside=false; setArrivalStatus("MONITORING");setArrivalMessage(`${Math.round(distance)} m from destination · arrival radius ${radius} m`);}
}
function arrivalCheckOnce(){
  const target=readArrivalTarget(); if(!target)return;
  if(!navigator.geolocation){toast("Geolocation is not available in this browser");return;}
  setArrivalStatus("CHECKING");
  navigator.geolocation.getCurrentPosition(checkArrivalPosition,()=>{setArrivalStatus("GPS ERROR");setArrivalMessage("Could not get a fresh GPS fix. Check browser location permission.");toast("GPS check failed")},{enableHighAccuracy:true,timeout:8000,maximumAge:10000});
}
function toggleArrivalGuard(){
  if(arrivalWatchId!==null){navigator.geolocation.clearWatch(arrivalWatchId);arrivalWatchId=null;$('arrivalWatch').textContent="▶ Start guard";setArrivalStatus("PAUSED");setArrivalMessage("Arrival guard paused.");return;}
  if(!readArrivalTarget())return;
  if(!navigator.geolocation){toast("Geolocation is not available in this browser");return;}
  arrivalWatchId=navigator.geolocation.watchPosition(checkArrivalPosition,err=>{setArrivalStatus("GPS ERROR");setArrivalMessage(err.code===1?"Location permission is required for arrival monitoring.":"Waiting for a fresh GPS fix…");},{enableHighAccuracy:true,timeout:10000,maximumAge:5000});
  $("arrivalWatch").textContent="■ Stop guard";setArrivalStatus("MONITORING");setArrivalMessage("Arrival guard is watching your device GPS locally.");toast("Destination guard started");
}
$("useMapDestination")?.addEventListener("click",destinationFromMap);
$("checkArrival")?.addEventListener("click",arrivalCheckOnce);
$("arrivalWatch")?.addEventListener("click",toggleArrivalGuard);
window.addEventListener("beforeunload",()=>{if(arrivalWatchId!==null)navigator.geolocation.clearWatch(arrivalWatchId);});


// WORLD OFFLINE NAVIGATION ENGINE — local waypoint guidance, no routing server required.
(() => {
  const $ = id => document.getElementById(id); const KEY='mapx-offline-waypoints-v1'; let waypoints=load(); let watch=null; let active=0;
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]').filter(x=>Number.isFinite(x.lat)&&Number.isFinite(x.lng))}catch{return[]}}
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(waypoints.slice(0,20)))}catch{}}
  function dist(a,b){const R=6371000,r=Math.PI/180,dLat=(b.lat-a.lat)*r,dLng=(b.lng-a.lng)*r,x=Math.sin(dLat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLng/2)**2;return 2*R*Math.asin(Math.min(1,Math.sqrt(x)))}
  function bearing(a,b){const r=Math.PI/180,y=Math.sin((b.lng-a.lng)*r)*Math.cos(b.lat*r),x=Math.cos(a.lat*r)*Math.sin(b.lat*r)-Math.sin(a.lat*r)*Math.cos(b.lat*r)*Math.cos((b.lng-a.lng)*r);return (Math.atan2(y,x)/r+360)%360}
  function dir(deg){const dirs=['N','NE','E','SE','S','SW','W','NW'];return dirs[Math.round(deg/45)%8]}
  function render(){const box=$('offWaypointList'); if(!box)return; box.innerHTML=waypoints.length?waypoints.map((w,i)=>`<div style="padding:9px;margin-top:7px;border-radius:10px;background:rgba(255,255,255,.04);display:flex;justify-content:space-between;gap:8px"><span><b>${i+1}. ${escapeHtml(w.name||'Waypoint '+(i+1))}</b><br><small>${w.lat.toFixed(5)}, ${w.lng.toFixed(5)}</small></span><button type="button" data-off-del="${i}">Delete</button></div>`).join(''):'<div class="muted">No offline waypoints yet.</div>'; box.querySelectorAll('[data-off-del]').forEach(b=>b.onclick=()=>{waypoints.splice(+b.dataset.offDel,1);if(active>=waypoints.length)active=Math.max(0,waypoints.length-1);persist();render();paint();});}
  function paint(pos){$('offGps').textContent=pos?`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`:'NO FIX'; const t=waypoints[active]; $('offTarget').textContent=t?t.name||`Waypoint ${active+1}`:'NONE'; if(pos&&t){const d=dist({lat:pos.coords.latitude,lng:pos.coords.longitude},t),b=bearing({lat:pos.coords.latitude,lng:pos.coords.longitude},t);$('offDistance').textContent=d<1000?`${Math.round(d)} m`:`${(d/1000).toFixed(2)} km`;$('offBearing').textContent=`${Math.round(b)}° ${dir(b)}`;$('offlineNavMessage').textContent=d<30?`🎯 Waypoint ${active+1} reached.`:`Head ${dir(b)} (${Math.round(b)}°) · ${Math.round(d)} m to waypoint ${active+1}.`;if(d<30&&active<waypoints.length-1){active++;$('offlineNavMessage').textContent=`Waypoint reached. Next: ${waypoints[active].name||'Waypoint '+(active+1)}.`;}else if(d<30&&waypoints.length){$('offlineNavStatus').textContent='ARRIVED';}} else if(!t){$('offlineNavMessage').textContent='Add a waypoint to begin offline guidance.'}}
  function start(){if(!waypoints.length){$('offlineNavMessage').textContent='Add at least one waypoint first.';return} if(!navigator.geolocation){$('offlineNavMessage').textContent='Geolocation is unavailable in this browser.';return} if(watch!==null)return;active=0;watch=navigator.geolocation.watchPosition(p=>{ $('offlineNavStatus').textContent='GUIDING';paint(p);},()=>{$('offlineNavStatus').textContent='GPS WAIT';$('offlineNavMessage').textContent='Waiting for a fresh GPS fix…';},{enableHighAccuracy:true,maximumAge:3000,timeout:12000});$('offlineNavStatus').textContent='GUIDING'}
  function stop(){if(watch!==null)navigator.geolocation.clearWatch(watch);watch=null;$('offlineNavStatus').textContent='PAUSED';$('offlineNavMessage').textContent='Offline guidance paused.'}
  $('offSetCenter')?.addEventListener('click',()=>{if(!window.map)return;const c=map.getCenter();$('offlineNavMessage').textContent=`Map center selected: ${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}. Press Add waypoint.`;window.__offCenter={lat:c.lat,lng:c.lng}});
  $('offAddWaypoint')?.addEventListener('click',()=>{const c=window.__offCenter||(window.map?map.getCenter():null);if(!c)return;$('offlineNavStatus').textContent='READY';waypoints.push({name:`Waypoint ${waypoints.length+1}`,lat:Number(c.lat),lng:Number(c.lng),savedAt:Date.now()});persist();render();paint();$('offlineNavMessage').textContent='Waypoint saved locally. Add another or start guidance.';});
  $('offStart')?.addEventListener('click',start); $('offStop')?.addEventListener('click',stop); $('offClear')?.addEventListener('click',()=>{stop();waypoints=[];active=0;persist();render();paint();$('offlineNavStatus').textContent='READY';}); render();paint();
})();

/* ===== NEXT STAGE: WORLD OFFLINE ROAD ROUTING LAB =====
   Imports user-provided GeoJSON road data and computes a local route with A*.
   This module intentionally does not pretend to contain worldwide road data.
*/
(function offlineRoadRoutingLab(){
  const wrap=document.getElementById('mapWrap');
  if(!wrap || document.getElementById('offlineRoadLab')) return;
  const launch=document.createElement('button');
  launch.id='offlineRoadLabLaunch'; launch.className='offroad-launch'; launch.type='button'; launch.textContent='🛣️ Offline Road Lab'; wrap.appendChild(launch);
  const panel=document.createElement('section');
  panel.id='offlineRoadLab'; panel.className='offroad-panel'; panel.hidden=true;
  panel.innerHTML=`<div class="or-head"><div><h3>🛣️ Offline Road Routing Lab</h3><small>Local road graph · A* routing · no routing server required</small></div><button id="orClose" class="or-close" type="button">×</button></div>
  <div class="or-file"><label for="orFile">Import a road GeoJSON / JSON file</label><input id="orFile" type="file" accept=".geojson,.json,application/geo+json,application/json"></div>
  <div class="or-grid"><div class="or-stat"><span>ROAD SEGMENTS</span><b id="orSegments">0</b></div><div class="or-stat"><span>GRAPH NODES</span><b id="orNodes">0</b></div><div class="or-stat"><span>GRAPH STATUS</span><b id="orStatus">EMPTY</b></div></div>
  <div class="or-actions"><select id="orProfile" aria-label="Routing profile"><option value="driving">🚗 Driving</option><option value="walking">🚶 Walking</option><option value="cycling">🚲 Cycling</option></select><button id="orStart" type="button">📍 Start = map center</button><button id="orEnd" type="button">🎯 End = destination</button><button id="orRoute" class="primary" type="button">🧭 Route offline</button><button id="orClear" type="button">⊗ Clear</button></div>
  <div class="or-note" id="orNote">Import road data for the region you want to use. The local engine supports LineString/MultiLineString GeoJSON. No external routing request is made.</div>
  <div class="or-route" id="orRouteList"></div>`;
  wrap.appendChild(panel);
  const $=id=>document.getElementById(id);
  let graph=new Map(), segments=0, start=null, end=null, routeLayer=null, profile='driving';
  const key=(lat,lng)=>`${lat.toFixed(6)},${lng.toFixed(6)}`;
  const hav=(a,b)=>{const R=6371000,p=Math.PI/180,dLat=(b.lat-a.lat)*p,dLng=(b.lng-a.lng)*p,x=Math.sin(dLat/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(dLng/2)**2;return 2*R*Math.asin(Math.sqrt(x));};
  const parseBool=v=>{if(v===true||v===1)return true;if(typeof v==='string')return /^(yes|true|1|y)$/i.test(v.trim());return false};
  const blocked=v=>{if(v==null)return false;const s=String(v).toLowerCase();return /^(no|false|0|private|restricted|emergency)$/.test(s)};
  const speedFor=()=>profile==='walking'?1.4:profile==='cycling'?5.5:13.9;
  function addNode(lat,lng){const k=key(lat,lng);if(!graph.has(k))graph.set(k,{key:k,lat,lng,edges:[]});return k;}
  function addEdge(a,b,oneway=false){const A=graph.get(a),B=graph.get(b);if(!A||!B)return;const w=hav(A,B);A.edges.push({to:b,w});if(!oneway)B.edges.push({to:a,w});}
  function addLine(coords,props){if(!Array.isArray(coords)||coords.length<2)return;const oneway=parseBool(props?.oneway);if(blocked(props?.access)||blocked(props?.vehicle)&&profile==='driving')return;let prev=null;for(const c of coords){if(!Array.isArray(c)||c.length<2)continue;const lng=Number(c[0]),lat=Number(c[1]);if(!Number.isFinite(lat)||!Number.isFinite(lng))continue;const k=addNode(lat,lng);if(prev){addEdge(prev,k,oneway);segments++;}prev=k;}}
  function importGeojson(data){graph=new Map();segments=0;const features=data?.type==='FeatureCollection'?data.features:data?.type==='Feature'?[data]:[];for(const f of features){const g=f?.geometry,p=f?.properties||{};if(!g)continue;if(g.type==='LineString')addLine(g.coordinates,p);else if(g.type==='MultiLineString')for(const line of g.coordinates||[])addLine(line,p);}paintStats();if(!segments){$('orStatus').textContent='INVALID';$('orNote').innerHTML='<span class="or-warning">No LineString road features were found. Export roads as GeoJSON LineString/MultiLineString data.</span>';return false} $('orStatus').textContent='READY';$('orNote').innerHTML=`<span class="or-good">Loaded ${segments} road segments and ${graph.size} graph nodes locally.</span> One-way and access properties are respected when present.`;return true;}
  function paintStats(){$('orSegments').textContent=String(segments);$('orNodes').textContent=String(graph.size);}
  function nearest(p){let best=null;for(const n of graph.values()){const d=hav(p,n);if(!best||d<best.d)best={key:n.key,d,node:n};}return best;}
  function heuristic(a,b){return hav(a,b)/speedFor();}
  function astar(from,to){if(!graph.has(from)||!graph.has(to))return null;const open=new Set([from]),came=new Map(),g=new Map([[from,0]]),f=new Map([[from,heuristic(graph.get(from),graph.get(to))]]);while(open.size){let current=null,best=Infinity;for(const k of open){const v=f.get(k)??Infinity;if(v<best){best=v;current=k;}}if(current===to){const path=[current];while(came.has(current)){current=came.get(current);path.push(current)}return path.reverse();}open.delete(current);const n=graph.get(current);for(const e of n.edges){const tentative=(g.get(current)??Infinity)+e.w/speedFor();if(tentative<(g.get(e.to)??Infinity)){came.set(e.to,current);g.set(e.to,tentative);f.set(e.to,tentative+heuristic(graph.get(e.to),graph.get(to)));open.add(e.to);}}}return null;}
  function route(){if(!graph.size){$('orNote').innerHTML='<span class="or-warning">Import road data first.</span>';return}if(!start){start={lat:map.getCenter().lat,lng:map.getCenter().lng};}if(!end){const d=window.__mapxDestination;if(d)end={lat:+d.lat,lng:+d.lng};else{end={lat:map.getCenter().lat,lng:map.getCenter().lng};$('orNote').textContent='Set an end point using a selected destination or the End button.';return;}}
    const s=nearest(start),t=nearest(end);if(!s||!t){$('orNote').textContent='Could not snap the selected points to the imported road graph.';return}const path=astar(s.key,t.key);if(!path){$('orStatus').textContent='NO ROUTE';$('orNote').innerHTML='<span class="or-warning">No connected road path was found between the selected points.</span>';return}
    const latlngs=path.map(k=>[graph.get(k).lat,graph.get(k).lng]);if(routeLayer)map.removeLayer(routeLayer);routeLayer=L.polyline(latlngs,{color:'#ff4fd1',weight:6,opacity:.92,dashArray:'10 8'}).addTo(map);map.fitBounds(routeLayer.getBounds(),{padding:[45,45]});let meters=0;for(let i=1;i<path.length;i++)meters+=hav(graph.get(path[i-1]),graph.get(path[i]));const eta=Math.max(1,Math.round(meters/speedFor()/60));$('orStatus').textContent='ROUTE READY';$('orNote').textContent=`Offline route found. Snapped endpoints are ${Math.round(s.d)} m and ${Math.round(t.d)} m from the selected points.`;$('orRouteList').innerHTML=`<div class="or-route-row"><b>${(meters/1000).toFixed(2)} km</b> · approx. ${eta} min · ${profile}</div>`+path.slice(0,20).map((k,i)=>{const n=graph.get(k);return `<div class="or-route-row">${i+1}. ${n.lat.toFixed(5)}, ${n.lng.toFixed(5)}</div>`}).join('');
  }
  function clear(){if(routeLayer){map.removeLayer(routeLayer);routeLayer=null}graph=new Map();segments=0;start=null;end=null;paintStats();$('orStatus').textContent='EMPTY';$('orRouteList').innerHTML='';$('orNote').textContent='Road graph cleared from this page session.';}
  launch.onclick=()=>{panel.hidden=!panel.hidden;launch.classList.toggle('active',!panel.hidden)};$('orClose').onclick=()=>{panel.hidden=true;launch.classList.remove('active')};
  $('orProfile').onchange=e=>{profile=e.target.value};$('orStart').onclick=()=>{start={lat:map.getCenter().lat,lng:map.getCenter().lng};$('orNote').textContent=`Start point set at ${start.lat.toFixed(5)}, ${start.lng.toFixed(5)}.`};$('orEnd').onclick=()=>{const d=window.__mapxDestination;if(d){end={lat:+d.lat,lng:+d.lng};$('orNote').textContent=`End point set to ${d.name||'destination'}.`;}else{const c=map.getCenter();end={lat:c.lat,lng:c.lng};$('orNote').textContent='End point set to the current map center.';}};$('orRoute').onclick=route;$('orClear').onclick=clear;
  $('orFile').onchange=e=>{const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);importGeojson(data)}catch(err){$('orStatus').textContent='ERROR';$('orNote').innerHTML='<span class="or-warning">The selected file is not valid JSON/GeoJSON.</span>';}e.target.value='';};reader.readAsText(file)};
  window.MapXOfflineRoadLab={open:()=>{panel.hidden=false;launch.classList.add('active')},clear,route,getStats:()=>({segments,nodes:graph.size})};
})();

/* WORLD OFFLINE ROUTE INTELLIGENCE PLUS */
(function(){
 const $=id=>document.getElementById(id);
 const defaults={drive:{speed:40},walk:{speed:5},bike:{speed:18}};
 function profileChanged(){ const p=$('riProfile')?.value||'drive'; if($('riSpeed')) $('riSpeed').value=defaults[p].speed; }
 function hav(a,b){const R=6371000,la1=a[1]*Math.PI/180,la2=b[1]*Math.PI/180,dl=(b[1]-a[1])*Math.PI/180,dg=(b[0]-a[0])*Math.PI/180;const x=Math.sin(dl/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dg/2)**2;return 2*R*Math.asin(Math.sqrt(x));}
 function calculate(){
   const g=window.mapxOfflineGraph; if(!g||!g.nodes){$('riStatus').textContent='NO ROAD DATA';$('riResult').textContent='Import offline road data first.';return;}
   let w=[];try{w=JSON.parse(localStorage.getItem('mapx-offline-waypoints-v1')||'[]').filter(x=>Number.isFinite(x.lat)&&Number.isFinite(x.lng));}catch{}
   if(w.length<2){$('riResult').textContent='Save at least two offline waypoints first.';return;}
   const start=window.mapxOfflineNearest?.([w[0].lng,w[0].lat]), end=window.mapxOfflineNearest?.([w[1].lng,w[1].lat]);
   if(!start||!end){$('riResult').textContent='Could not snap both waypoints to the imported road graph.';return;}
   const optimize=$('riOptimize').value, speed=Math.max(1,Math.min(160,Number($('riSpeed').value)||40));
   const path=window.mapxOfflinePath?.(start.key,end.key,optimize,speed);
   if(!path||path.length<2){$('riResult').textContent='No connected route exists in this offline region.';return;}
   const km=path.slice(1).reduce((sum,c,i)=>sum+hav(path[i],c),0)/1000;
   const hours=km/speed; const eta=hours<1?`${Math.round(hours*60)} min`:`${hours.toFixed(1)} h`;
   $('riStatus').textContent='ROUTE READY'; $('riStatus').className='status ok'; $('riResult').textContent=`${optimize==='time'?'Fastest':'Shortest'} ${$('riProfile').selectedOptions[0].textContent}: ${km.toFixed(2)} km · approx. ${eta} · snap ${Math.round(start.d)} m / ${Math.round(end.d)} m.`;
   if(window.map&&window.L){if(window.mapxOfflineIntelLayer) window.mapxOfflineIntelLayer.remove();window.mapxOfflineIntelLayer=L.polyline(path.map(c=>[c[1],c[0]]),{weight:8,opacity:.75,dashArray:'3 8'}).addTo(map);}
 }
 $('riProfile')?.addEventListener('change',profileChanged); $('riCalculate')?.addEventListener('click',calculate); $('riReset')?.addEventListener('click',()=>{const p='drive';$('riProfile').value=p;$('riOptimize').value='distance';$('riSpeed').value=40;$('riResult').textContent='Profile reset.';}); profileChanged();
})();

(function(){
 function d(a,b){const R=6371000,la1=a[1]*Math.PI/180,la2=b[1]*Math.PI/180,dl=(b[1]-a[1])*Math.PI/180,dg=(b[0]-a[0])*Math.PI/180;const x=Math.sin(dl/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dg/2)**2;return 2*R*Math.asin(Math.sqrt(x));}
 function load(){try{return JSON.parse(localStorage.getItem('mapx-offline-road-graph-v1')||'null')}catch{return null}}
 window.mapxOfflineGraph=load();
 window.mapxOfflineNearest=function(pt){const g=load();if(!g)return null;let best=null;for(const k in g.nodes){const n=g.nodes[k],dd=d(pt,[n.lng,n.lat]);if(!best||dd<best.d)best={key:k,d:dd};}return best};
 window.mapxOfflinePath=function(start,end,opt,speed){const g=load();if(!g||!g.nodes[start]||!g.nodes[end])return null;const dist={},prev={},seen=new Set(),q=[];for(const k in g.nodes)dist[k]=Infinity;dist[start]=0;q.push(start);while(q.length){q.sort((a,b)=>dist[a]-dist[b]);const u=q.shift();if(seen.has(u))continue;seen.add(u);if(u===end)break;for(const e of (g.nodes[u].links||[])){const v=e.to,w=Number(e.distance)||d([g.nodes[u].lng,g.nodes[u].lat],[g.nodes[v].lng,g.nodes[v].lat]);const cost=opt==='time'?w/Math.max(1,speed):w;if(dist[u]+cost<dist[v]){dist[v]=dist[u]+cost;prev[v]=u;q.push(v);}}}if(!Number.isFinite(dist[end]))return null;const out=[];let cur=end;while(cur){const n=g.nodes[cur];out.push([n.lng,n.lat]);if(cur===start)break;cur=prev[cur];}return out.reverse();};
})();

/* MAPXPLORER WORLD OFFLINE NAVIGATION SESSION & REPLAY */
(function(){
  const root=document.getElementById('sessionReplayPanel');
  if(!root) return;
  const $=id=>document.getElementById(id);
  const status=$('replayStatus'), elapsed=$('replayElapsed'), progress=$('replayProgress'), steps=$('replaySteps'), scrub=$('replayScrubber');
  let running=false, startedAt=0, pausedMs=0, timer=null, cursor=0, session=[];
  const now=()=>Date.now();
  function guidanceSteps(){
    const selectors=['#routePanel .step','#routePanel .turn-step','.turn-step','.guidance-step'];
    for(const sel of selectors){const els=[...document.querySelectorAll(sel)];if(els.length)return els.map((e,i)=>({index:i+1,text:e.textContent.trim()}));}
    return [...document.querySelectorAll('#routePanel li')].map((e,i)=>({index:i+1,text:e.textContent.trim()}));
  }
  function fmt(ms){const sec=Math.max(0,Math.floor(ms/1000));return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');}
  function render(){
    const total=session.length||guidanceSteps().length||1;
    const pct=Math.round((cursor/Math.max(1,total-1))*100);
    progress.textContent=pct+'%'; scrub.value=String(Math.min(100,pct)); steps.textContent=Math.min(cursor+1,total)+' / '+total;
    elapsed.textContent=fmt((running?now()-startedAt:pausedMs));
  }
  function tick(){render(); if(running) timer=requestAnimationFrame(tick);}
  function start(){
    if(!running){
      const base=guidanceSteps();
      if(!session.length) session=base.map(x=>({...x,t:Date.now()}));
      startedAt=now()-pausedMs; running=true; status.textContent='RECORDING'; status.dataset.state='active'; tick();
    }
  }
  function pause(){if(!running)return; pausedMs=now()-startedAt; running=false; status.textContent='PAUSED'; if(timer)cancelAnimationFrame(timer); render();}
  function reset(){running=false;if(timer)cancelAnimationFrame(timer);startedAt=0;pausedMs=0;cursor=0;session=[];status.textContent='READY';render();}
  function seek(v){const total=Math.max(1,session.length||guidanceSteps().length||1);cursor=Math.round((Number(v)/100)*(total-1));status.textContent=running?'RECORDING':'REPLAY';render();}
  function exportSession(){
    const data={app:'MapXplorer 3D',type:'offline-navigation-session',createdAt:new Date().toISOString(),elapsedMs:running?now()-startedAt:pausedMs,progressPercent:Number(progress.textContent.replace('%','')),steps:session.length?session:guidanceSteps()};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='mapxplorer-navigation-session.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);
  }
  $('replayStart').addEventListener('click',start); $('replayPause').addEventListener('click',pause); $('replayReset').addEventListener('click',reset); $('replayExport').addEventListener('click',exportSession); scrub.addEventListener('input',e=>seek(e.target.value));
  render();
})();

/* ===== NEXT STAGE: WORLD JOURNEY SCENARIO PLANNER ===== */
(function worldJourneyScenarioPlanner(){
  const $=id=>document.getElementById(id);
  const HIST='mapx-offline-route-history-v1';
  if(!$('jspA')||!$('jspB')||!$('jspC')) return;
  let lastReport=null;
  function read(){try{const x=JSON.parse(localStorage.getItem(HIST)||'[]');return Array.isArray(x)?x:[]}catch{return[]}}
  function pathKm(p){if(!Array.isArray(p)||p.length<2)return 0;let m=0;const R=6371000,rad=x=>x*Math.PI/180;for(let i=1;i<p.length;i++){const a=p[i-1],b=p[i],la1=rad(a[1]),la2=rad(b[1]),dlat=rad(b[1]-a[1]),dlon=rad(b[0]-a[0]),q=Math.sin(dlat/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dlon/2)**2;m+=2*R*Math.asin(Math.sqrt(q));}return m/1000}
  function distance(x){return Number(x?.distanceKm)||pathKm(x?.path)}
  function durationMin(x){const n=Number(x?.durationMin??x?.estimatedMinutes??x?.duration);return Number.isFinite(n)&&n>=0?n:null}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function refresh(){const h=read();['jspA','jspB','jspC'].forEach((id,slot)=>{const s=$(id),old=s.value;s.innerHTML=slot===2?'<option value="">Optional</option>':'<option value="">Select route</option>';h.forEach((x,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent=`#${i+1} ${x.profile||'route'} · ${distance(x).toFixed(2)} km`;s.appendChild(o)});if(old!==''&&h[Number(old)])s.value=old;});$('jspStatus').textContent=h.length?'READY':'WAITING';}
  function analyze(){const h=read(),ids=['jspA','jspB','jspC'].map(id=>$(id).value).filter(v=>v!==''&&h[Number(v)]);const uniq=[...new Set(ids)].slice(0,3);if(uniq.length<2){$('jspSummary').textContent='Select at least two different saved routes.';$('jspTable').innerHTML='';$('jspStatus').textContent='WAITING';return;}const rows=uniq.map((v,i)=>{const x=h[Number(v)],d=distance(x),t=durationMin(x);return{slot:i+1,index:Number(v),profile:x.profile||'route',distanceKm:+d.toFixed(3),durationMin:t===null?null:+t.toFixed(1),createdAt:x.createdAt||null}});const minD=Math.min(...rows.map(r=>r.distanceKm).filter(Number.isFinite));const knownT=rows.map(r=>r.durationMin).filter(v=>v!==null);const minT=knownT.length?Math.min(...knownT):null;lastReport={generatedAt:new Date().toISOString(),scenarios:rows};$('jspTable').innerHTML='<table style="width:100%;border-collapse:collapse;min-width:520px"><thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Scenario</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Profile</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Distance</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Stored time</th></tr></thead><tbody>'+rows.map(r=>`<tr><td style="padding:8px">${r.slot}</td><td style="padding:8px">${esc(r.profile)}</td><td style="padding:8px">${r.distanceKm.toFixed(2)} km${r.distanceKm===minD?' · shortest saved distance':''}</td><td style="padding:8px">${r.durationMin===null?'—':r.durationMin.toFixed(1)+' min'+(r.durationMin===minT?' · shortest stored time':'')}</td></tr>`).join('')+'</tbody></table>';const known=knownT.length===rows.length;$('jspSummary').innerHTML=known?`All selected records contain stored duration values. Distances and stored times are shown side by side; these are saved-data measurements, not live traffic estimates.`:`Some selected records do not contain a stored duration. Distance can still be compared from saved geometry.`;$('jspStatus').textContent='ANALYZED';$('jspStatus').className='status ok';}
  $('jspAnalyze').onclick=analyze;$('jspRefresh').onclick=()=>{refresh();analyze()};$('jspExport').onclick=()=>{if(!lastReport){analyze();if(!lastReport)return;}const blob=new Blob([JSON.stringify(lastReport,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mapxplorer-journey-scenario-analysis.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)};window.addEventListener('mapx:route-saved',refresh);window.addEventListener('storage',e=>{if(e.key===HIST)refresh()});refresh();
})();


/* ===== NEXT STAGE: WORLD JOURNEY TIMELINE & WAYPOINT PLANNER ===== */
(function worldJourneyTimeline(){
  const $=id=>document.getElementById(id), KEY='mapx-journey-timeline-v1';
  if(!$('jtpAdd')) return;
  let items=[];
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');items=Array.isArray(x)?x:[]}catch{items=[]}}
  function save(){localStorage.setItem(KEY,JSON.stringify(items));window.dispatchEvent(new CustomEvent('mapx:timeline-updated'))}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function render(){
    const list=$('jtpList');
    $('jtpStatus').textContent=items.length?`${items.length} WAYPOINT${items.length===1?'':'S'}`:'READY';
    if(!items.length){list.innerHTML='<div class="nearby-empty">No waypoints yet. Add your first stop above.</div>';$('jtpSummary').textContent='Your timeline is empty.';return;}
    list.innerHTML=items.map((x,i)=>`<div style="display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;padding:10px;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:rgba(255,255,255,.035)"><b>${i+1}</b><div><strong>${esc(x.name)}</strong><div style="font-size:.85em;opacity:.72">${Number(x.lat).toFixed(5)}, ${Number(x.lng).toFixed(5)}${x.time?' · '+esc(x.time):''}</div></div><div style="display:flex;gap:5px"><button data-up="${i}" type="button">↑</button><button data-down="${i}" type="button">↓</button><button data-del="${i}" type="button">×</button></div></div>`).join('');
    $('jtpSummary').textContent=`${items.length} waypoint${items.length===1?'':'s'} planned. Timeline order is saved locally in this browser.`;
    list.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>move(+b.dataset.up,-1));
    list.querySelectorAll('[data-down]').forEach(b=>b.onclick=()=>move(+b.dataset.down,1));
    list.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{items.splice(+b.dataset.del,1);save();render()});
  }
  function move(i,delta){const j=i+delta;if(j<0||j>=items.length)return;[items[i],items[j]]=[items[j],items[i]];save();render()}
  function add(){
    const name=$('jtpName').value.trim()||`Waypoint ${items.length+1}`,lat=Number($('jtpLat').value),lng=Number($('jtpLng').value),time=$('jtpTime').value.trim();
    if(!Number.isFinite(lat)||lat<-90||lat>90||!Number.isFinite(lng)||lng<-180||lng>180){$('jtpStatus').textContent='INVALID COORDINATES';return;}
    items.push({name,lat:+lat.toFixed(6),lng:+lng.toFixed(6),time,createdAt:new Date().toISOString()});
    save();render();$('jtpName').value='';$('jtpTime').value='';$('jtpStatus').textContent='ADDED';
  }
  function useCenter(){if(window.map){const c=map.getCenter();$('jtpLat').value=c.lat.toFixed(6);$('jtpLng').value=c.lng.toFixed(6);$('jtpStatus').textContent='CENTER LOADED';}else $('jtpStatus').textContent='MAP UNAVAILABLE'}
  function clear(){if(!items.length)return;items=[];save();render()}
  function exportData(){const data={app:'MapXplorer 3D',type:'journey-timeline',createdAt:new Date().toISOString(),waypoints:items};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mapxplorer-journey-timeline.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)}
  $('jtpAdd').onclick=add;$('jtpUseCenter').onclick=useCenter;$('jtpClear').onclick=clear;$('jtpExport').onclick=exportData;load();render();
})();


/* ===== NEXT STAGE: WORLD JOURNEY ROUTE SEQUENCER ===== */
(function worldJourneyRouteSequencer(){
  const $=id=>document.getElementById(id), KEY='mapx-journey-timeline-v1';
  if(!$('jseqBuild')) return;
  let previewLayer=null, lastPlan=null;
  const R=6371000, rad=x=>x*Math.PI/180;
  function hav(a,b){const p1=rad(a.lat),p2=rad(b.lat),dlat=rad(b.lat-a.lat),dlon=rad(b.lng-a.lng),q=Math.sin(dlat/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dlon/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x.filter(v=>Number.isFinite(Number(v.lat))&&Number.isFinite(Number(v.lng))):[]}catch{return[]}}
  function speed(profile){return profile==='walk'?5:profile==='bike'?18:50}
  function label(profile){return profile==='walk'?'Walking':profile==='bike'?'Cycling':'Driving'}
  function clearPreview(){if(previewLayer&&window.map){map.removeLayer(previewLayer)}previewLayer=null;lastPlan=null;$('jseqTable').innerHTML='';$('jseqSummary').textContent='Preview cleared.';$('jseqStatus').textContent='READY';}
  function build(){
    let w=load();
    if(w.length<2){$('jseqStatus').textContent='NEED 2+ WAYPOINTS';$('jseqSummary').textContent='Save at least two waypoints in Journey Timeline first.';return;}
    const profile=$('jseqProfile').value;
    if($('jseqStart').value==='current'&&window.map){const c=map.getCenter();w=[{name:'Current map center',lat:c.lat,lng:c.lng},...w];}
    const segments=[];let total=0;
    for(let i=1;i<w.length;i++){const m=hav(w[i-1],w[i]);total+=m;segments.push({from:w[i-1].name||`Waypoint ${i}`,to:w[i].name||`Waypoint ${i+1}`,meters:m,km:m/1000,minutes:m/1000/speed(profile)*60});}
    if(previewLayer&&window.map)map.removeLayer(previewLayer);
    if(window.L&&window.map){previewLayer=L.polyline(w.map(x=>[Number(x.lat),Number(x.lng)]),{weight:5,opacity:.85,dashArray:'8 8'}).addTo(map);try{map.fitBounds(previewLayer.getBounds(),{padding:[30,30]})}catch{}}
    lastPlan={app:'MapXplorer 3D',type:'journey-route-sequence',createdAt:new Date().toISOString(),profile,waypoints:w.map(x=>({name:x.name||'',lat:Number(x.lat),lng:Number(x.lng),time:x.time||''})),segments,totalDistanceKm:+(total/1000).toFixed(3),estimatedMinutes:+(total/1000/speed(profile)*60).toFixed(1),note:'Segment distances are straight-line geographic distances; they are not live road distances or traffic estimates.'};
    $('jseqStatus').textContent='PLAN READY';$('jseqStatus').className='status ok';
    $('jseqSummary').textContent=`${w.length} stops · ${label(profile)} · ${ (total/1000).toFixed(2)} km straight-line preview · about ${Math.max(1,Math.round(total/1000/speed(profile)*60))} min at a fixed profile speed.`;
    $('jseqTable').innerHTML='<table style="width:100%;border-collapse:collapse;min-width:520px"><thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Leg</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">From → To</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Distance</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Est. time</th></tr></thead><tbody>'+segments.map((x,i)=>`<tr><td style="padding:8px">${i+1}</td><td style="padding:8px">${esc(x.from)} → ${esc(x.to)}</td><td style="padding:8px">${x.km.toFixed(2)} km</td><td style="padding:8px">${Math.max(1,Math.round(x.minutes))} min</td></tr>`).join('')+'</tbody></table>';
  }
  function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  $('jseqBuild').onclick=build;$('jseqClear').onclick=clearPreview;$('jseqExport').onclick=()=>{if(!lastPlan)build();if(!lastPlan)return;const blob=new Blob([JSON.stringify(lastPlan,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mapxplorer-journey-route-plan.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)};
  window.addEventListener('mapx:timeline-updated',()=>{$('jseqStatus').textContent='TIMELINE UPDATED'});
})();

/* ===== NEXT STAGE: WORLD JOURNEY ROUTE PLAYBACK SIMULATOR ===== */
(function worldJourneyPlayback(){
  const $=id=>document.getElementById(id); if(!$('jplayLoad')) return;
  const KEY='mapx-journey-timeline-v1'; let pts=[], marker=null, playing=false, raf=0;
  const R=6371000, rad=x=>x*Math.PI/180;
  function hav(a,b){const p1=rad(a.lat),p2=rad(b.lat),dlat=rad(b.lat-a.lat),dlon=rad(b.lng-a.lng),q=Math.sin(dlat/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dlon/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');pts=Array.isArray(x)?x.filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng))):[]}catch{pts=[];} $('jplayStatus').textContent=pts.length>1?'LOADED':'NEED WAYPOINTS';$('jplaySummary').textContent=pts.length>1?`${pts.length} waypoints loaded. Use Play or drag the slider.`:'Save at least two journey waypoints first.'; if(pts.length>1&&window.map&&window.L){if(marker)map.removeLayer(marker);marker=L.circleMarker([pts[0].lat,pts[0].lng],{radius:9,weight:3}).addTo(map);try{map.fitBounds(L.latLngBounds(pts.map(p=>[p.lat,p.lng])),{padding:[30,30]})}catch{}}}
  function position(t){if(pts.length<2)return; let lengths=[],total=0;for(let i=1;i<pts.length;i++){const d=hav(pts[i-1],pts[i]);lengths.push(d);total+=d;}let target=total*t,acc=0;for(let i=1;i<pts.length;i++){const d=lengths[i-1];if(target<=acc+d||i===pts.length-1){const f=d?Math.max(0,Math.min(1,(target-acc)/d)):0;const lat=pts[i-1].lat+(pts[i].lat-pts[i-1].lat)*f,lng=pts[i-1].lng+(pts[i].lng-pts[i-1].lng)*f;if(marker)marker.setLatLng([lat,lng]);$('jplaySummary').textContent=`${Math.round(t*100)}% · ${pts[i-1].name||'Waypoint '+i} → ${pts[i].name||'Waypoint '+(i+1)}`;return;}acc+=d;}}
  function step(now){if(!playing)return;const start=step.start??(step.start=now);const t=Math.min(1,(now-start)/12000);$('jplaySlider').value=Math.round(t*1000);position(t);if(t<1)raf=requestAnimationFrame(step);else{playing=false;step.start=null;$('jplayStatus').textContent='COMPLETE';}}
  $('jplayLoad').onclick=load; $('jplaySlider').addEventListener('input',e=>{playing=false;cancelAnimationFrame(raf);step.start=null;position(Number(e.target.value)/1000);$('jplayStatus').textContent='SCRUBBING'});
  $('jplayStart').onclick=()=>{if(pts.length<2){load();if(pts.length<2)return;} playing=true;step.start=null;raf=requestAnimationFrame(step);$('jplayStatus').textContent='PLAYING'};
  $('jplayPause').onclick=()=>{playing=false;cancelAnimationFrame(raf);step.start=null;$('jplayStatus').textContent='PAUSED'};
  $('jplayReset').onclick=()=>{playing=false;cancelAnimationFrame(raf);step.start=null;$('jplaySlider').value=0;position(0);$('jplayStatus').textContent='READY'};
  window.addEventListener('mapx:timeline-updated',load);
})();


/* ===== NEXT STAGE: WORLD JOURNEY PLAYBACK TELEMETRY ===== */
(function worldJourneyPlaybackTelemetry(){
  const $=id=>document.getElementById(id); if(!$('jtelLoad')) return;
  const KEY='mapx-journey-timeline-v1'; let pts=[];
  const R=6371000, rad=x=>x*Math.PI/180;
  function hav(a,b){const p1=rad(a.lat),p2=rad(b.lat),dlat=rad(b.lat-a.lat),dlon=rad(b.lng-a.lng),q=Math.sin(dlat/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dlon/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');pts=Array.isArray(x)?x.filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng))):[]}catch{pts=[];} render();}
  function calc(){let total=0;const legs=[];for(let i=1;i<pts.length;i++){const d=hav(pts[i-1],pts[i]);total+=d;legs.push(d);}return {total,legs};}
  function render(){const g=$('jtelemetryGrid'); if(pts.length<2){g.innerHTML='';$('jtelSummary').textContent='Save at least two journey waypoints first.';$('jtelStatus').textContent='NEED WAYPOINTS';return;} const c=calc();const avgSpeed=50/3.6; const duration=c.total/avgSpeed; const values=[['Waypoints',pts.length],['Distance',`${(c.total/1000).toFixed(2)} km`],['Sim. time',`${Math.max(1,Math.round(duration/60))} min`],['Avg speed','50 km/h'],['Segments',c.legs.length],['Longest leg',`${(Math.max(...c.legs)/1000).toFixed(2)} km`]];g.innerHTML=values.map(v=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">${v[0]}</small><div style="font-weight:700;font-size:1.05rem;margin-top:3px">${v[1]}</div></div>`).join('');$('jtelSummary').textContent='Telemetry is calculated from saved waypoint geometry using straight-line distance and a fixed 50 km/h simulation speed.';$('jtelStatus').textContent='READY';}
  function reset(){pts=[];$('jtelemetryGrid').innerHTML='';$('jtelSummary').textContent='Telemetry reset.';$('jtelStatus').textContent='RESET';}
  function exportData(){if(pts.length<2){load();if(pts.length<2)return;}const c=calc();const out={app:'MapXplorer 3D',type:'journey-playback-telemetry',createdAt:new Date().toISOString(),waypoints:pts.map(p=>({name:p.name||'',lat:Number(p.lat),lng:Number(p.lng)})),distanceKm:+(c.total/1000).toFixed(3),simulatedSpeedKmh:50,simulatedMinutes:+(c.total/1000/50*60).toFixed(1),segments:c.legs.map((d,i)=>({from:pts[i].name||`Waypoint ${i+1}`,to:pts[i+1].name||`Waypoint ${i+2}`,distanceKm:+(d/1000).toFixed(3)})),note:'Simulated telemetry only; not live GPS or road traffic data.'};const b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-playback-telemetry.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);}
  $('jtelLoad').onclick=load;$('jtelReset').onclick=reset;$('jtelExport').onclick=exportData;window.addEventListener('mapx:timeline-updated',load);load();
})();


/* WORLD JOURNEY PLAYBACK COMMAND CENTER */
(function worldJourneyPlaybackCommandCenter(){
  const $=id=>document.getElementById(id);
  const KEY='mapx-journey-timeline-v1';
  const slider=$('jcmdSlider'), source=$('jplaySlider');
  if(!slider||!source)return;
  let pts=[];
  function hav(a,b){const R=6371000,rad=Math.PI/180,dLat=(Number(b.lat)-Number(a.lat))*rad,dLng=(Number(b.lng)-Number(a.lng))*rad;const q=Math.sin(dLat/2)**2+Math.cos(Number(a.lat)*rad)*Math.cos(Number(b.lat)*rad)*Math.sin(dLng/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');pts=Array.isArray(x)?x.filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng))):[]}catch{pts=[]} render();}
  function metrics(t){if(pts.length<2)return null; const legs=[];let total=0;for(let i=1;i<pts.length;i++){const d=hav(pts[i-1],pts[i]);legs.push(d);total+=d;} let target=total*t, acc=0, leg=0, frac=0; for(let i=0;i<legs.length;i++){if(target<=acc+legs[i]||i===legs.length-1){leg=i;frac=legs[i]?Math.max(0,Math.min(1,(target-acc)/legs[i])):0;break;}acc+=legs[i];} const elapsed=target/ (50/3.6), remain=Math.max(0,total-target), eta=remain/(50/3.6); return {total,target,remain,elapsed,eta,leg,frac};}
  function fmtSec(sec){if(!Number.isFinite(sec))return '—';const m=Math.floor(sec/60),s=Math.round(sec%60);return m+'m '+String(s).padStart(2,'0')+'s';}
  function render(){const g=$('jcmdGrid'),r=$('jcmdRoute'); if(pts.length<2){g.innerHTML='';r.textContent='Save at least two journey waypoints first.';$('jcmdStatus').textContent='NEED WAYPOINTS';return;} const t=Number(slider.value)/1000,m=metrics(t); const from=pts[m.leg]?.name||('Waypoint '+(m.leg+1)),to=pts[m.leg+1]?.name||('Waypoint '+(m.leg+2)); const vals=[['Progress',(t*100).toFixed(1)+'%'],['Travelled',(m.target/1000).toFixed(2)+' km'],['Remaining',(m.remain/1000).toFixed(2)+' km'],['Elapsed',fmtSec(m.elapsed)],['ETA',fmtSec(m.eta)],['Current leg',(m.leg+1)+' / '+(pts.length-1)]];g.innerHTML=vals.map(v=>'<div style="padding:10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">'+v[0]+'</small><div style="font-weight:700;font-size:1.05rem;margin-top:3px">'+v[1]+'</div></div>').join('');r.textContent='Current segment: '+from+' → '+to+' · '+(m.frac*100).toFixed(0)+'% through this segment · fixed 50 km/h simulation.';$('jcmdStatus').textContent=t>=.999?'ARRIVED':'TRACKING';}
  function syncToSource(){slider.value=source.value;render();}
  function syncToPlayback(){source.value=slider.value;source.dispatchEvent(new Event('input',{bubbles:true}));render();}
  slider.addEventListener('input',syncToPlayback); source.addEventListener('input',syncToSource); $('jcmdSync').onclick=syncToSource; $('jcmdReset').onclick=()=>{slider.value='0';syncToPlayback();}; window.addEventListener('mapx:timeline-updated',load); load(); setInterval(()=>{if(document.hidden)return; if(source.value!==slider.value)syncToSource();},300);
})();


/* ===== NEXT STAGE: WORLD JOURNEY WAYPOINT INSPECTOR ===== */
(function worldJourneyWaypointInspector(){
  const $=id=>document.getElementById(id), KEY='mapx-journey-timeline-v1';
  if(!$('jwiSelect')) return;
  const R=6371000, rad=x=>x*Math.PI/180; let pts=[];
  function hav(a,b){const p1=rad(Number(a.lat)),p2=rad(Number(b.lat)),dlat=rad(Number(b.lat)-Number(a.lat)),dlon=rad(Number(b.lng)-Number(a.lng)),q=Math.sin(dlat/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dlon/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
  function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');pts=Array.isArray(x)?x.filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng))):[]}catch{pts=[];} const sel=$('jwiSelect');sel.innerHTML='<option value="">Select waypoint</option>'+pts.map((p,i)=>`<option value="${i}">${esc(p.name||`Waypoint ${i+1}`)}</option>`).join(''); $('jwiStatus').textContent=pts.length?'LOADED':'NEED WAYPOINTS'; $('jwiSummary').textContent=pts.length?`${pts.length} saved waypoints available for inspection.`:'Save journey waypoints first.'; if(pts.length) renderList(); else {$('jwiGrid').innerHTML='';$('jwiList').innerHTML='';}}
  function details(i){if(i<0||i>=pts.length)return null;let cumulative=0;for(let k=1;k<=i;k++)cumulative+=hav(pts[k-1],pts[k]);let leg=i?hav(pts[i-1],pts[i]):0;let remaining=0;for(let k=i+1;k<pts.length;k++)remaining+=hav(pts[k-1],pts[k]);let total=cumulative+remaining;return {p:pts[i],i,leg,cumulative,remaining,total,percent:total?(cumulative/total*100):0};}
  function render(i){if(!Number.isInteger(i)){ $('jwiGrid').innerHTML='';$('jwiRoute').textContent='Select a saved waypoint to inspect its journey position.';return;} const d=details(i),p=d.p; const vals=[['Waypoint',p.name||`Waypoint ${i+1}`],['Latitude',Number(p.lat).toFixed(6)],['Longitude',Number(p.lng).toFixed(6)],['Leg distance',`${(d.leg/1000).toFixed(3)} km`],['Distance from start',`${(d.cumulative/1000).toFixed(3)} km`],['Journey position',`${d.percent.toFixed(1)}%`],['Remaining',`${(d.remaining/1000).toFixed(3)} km`]]; $('jwiGrid').innerHTML=vals.map(v=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">${esc(v[0])}</small><div style="font-weight:700;font-size:1rem;margin-top:3px">${esc(v[1])}</div></div>`).join(''); const prev=i>0?(pts[i-1].name||`Waypoint ${i}`):'START'; const next=i<pts.length-1?(pts[i+1].name||`Waypoint ${i+2}`):'DESTINATION'; $('jwiRoute').textContent=`${prev} → ${p.name||`Waypoint ${i+1}`} → ${next}`; $('jwiStatus').textContent='INSPECTED';$('jwiStatus').className='status ok';}
  function renderList(){let cum=0;const rows=pts.map((p,i)=>{const leg=i?hav(pts[i-1],p):0;cum+=leg;return {i,name:p.name||`Waypoint ${i+1}`,leg,cum,p};});$('jwiList').innerHTML='<table style="width:100%;border-collapse:collapse;min-width:560px"><thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">#</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Waypoint</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Coordinates</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Leg</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">From start</th></tr></thead><tbody>'+rows.map(x=>`<tr><td style="padding:8px">${x.i+1}</td><td style="padding:8px"><button type="button" data-jwi="${x.i}" style="background:none;border:0;color:inherit;text-decoration:underline;cursor:pointer">${esc(x.name)}</button></td><td style="padding:8px">${Number(x.p.lat).toFixed(5)}, ${Number(x.p.lng).toFixed(5)}</td><td style="padding:8px">${(x.leg/1000).toFixed(3)} km</td><td style="padding:8px">${(x.cum/1000).toFixed(3)} km</td></tr>`).join('')+'</tbody></table>';$('jwiList').querySelectorAll('[data-jwi]').forEach(b=>b.addEventListener('click',()=>{$('jwiSelect').value=b.dataset.jwi;render(Number(b.dataset.jwi));}));}
  function esc(v){return String(v??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
  $('jwiSelect').addEventListener('change',e=>render(Number.isInteger(+e.target.value)&&e.target.value!==''?+e.target.value:-1));
  $('jwiLoad').onclick=load;
  $('jwiReset').onclick=()=>{$('jwiSelect').value='';$('jwiGrid').innerHTML='';$('jwiRoute').textContent='Inspector reset.';$('jwiStatus').textContent='READY';};
  $('jwiExport').onclick=()=>{const i=+$('jwiSelect').value;if(!Number.isInteger(i)||$('jwiSelect').value==='')return;const d=details(i),out={app:'MapXplorer 3D',type:'journey-waypoint-inspection',createdAt:new Date().toISOString(),index:i+1,name:d.p.name||`Waypoint ${i+1}`,coordinates:{lat:Number(d.p.lat),lng:Number(d.p.lng)},legDistanceKm:+(d.leg/1000).toFixed(3),distanceFromStartKm:+(d.cumulative/1000).toFixed(3),remainingDistanceKm:+(d.remaining/1000).toFixed(3),journeyPositionPercent:+d.percent.toFixed(2),note:'Geometry-based local waypoint inspection; not live road distance.'};const b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-waypoint-inspection.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);};
  window.addEventListener('mapx:timeline-updated',load);load();
})();
/* WORLD JOURNEY ROUTE HEATMAP */
(function worldJourneyRouteHeatmap(){
  const $=id=>document.getElementById(id), KEY='mapx-journey-timeline-v1', R=6371000, rad=x=>x*Math.PI/180;
  let pts=[], seg=[];
  function hav(a,b){const p1=rad(Number(a.lat)),p2=rad(Number(b.lat)),dp=rad(Number(b.lat)-Number(a.lat)),dl=rad(Number(b.lng)-Number(a.lng));const q=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 2*R*Math.asin(Math.sqrt(Math.max(0,Math.min(1,q))));}
  function esc(v){return String(v??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
  function load(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'[]');pts=Array.isArray(raw)?raw.filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng))):[]}catch{pts=[];}
    seg=[];for(let i=1;i<pts.length;i++){const km=hav(pts[i-1],pts[i])/1000;seg.push({i,from:pts[i-1].name||`Waypoint ${i}`,to:pts[i].name||`Waypoint ${i+1}`,km});}
    render();
  }
  function render(){const chart=$('jhmChart'),details=$('jhmDetails'),legend=$('jhmLegend');if(!chart)return;
    if(!seg.length){chart.innerHTML='<div style="padding:20px;opacity:.7">Save at least two journey waypoints first.</div>';details.textContent='No journey segments available.';$('jhmStatus').textContent='NEED WAYPOINTS';legend.innerHTML='';return;}
    const max=Math.max(...seg.map(x=>x.km),0.001),min=Math.min(...seg.map(x=>x.km));
    legend.innerHTML=`<span>🟦 Short: ≤ ${min.toFixed(2)} km</span><span>🟪 Medium</span><span>🟥 Long: ${max.toFixed(2)} km</span>`;
    chart.innerHTML=seg.map(x=>{const ratio=x.km/max,h=Math.max(22,ratio*135),bg=ratio>.66?'#ff4d6d':ratio>.33?'#9b5cff':'#3aa7ff';return `<button type="button" data-jhm="${x.i}" title="${esc(x.from)} → ${esc(x.to)} · ${x.km.toFixed(2)} km" style="min-width:34px;height:${h}px;margin-top:${150-h}px;padding:4px 3px;border-radius:8px 8px 3px 3px;background:${bg};border:1px solid rgba(255,255,255,.22);color:#fff;font-size:10px;font-weight:700">${x.i}</button>`;}).join('');
    chart.querySelectorAll('[data-jhm]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.jhm))));
    $('jhmStatus').textContent=`${seg.length} SEGMENTS`;$('jhmStatus').className='status ok';details.textContent=`${pts.length} waypoints · ${seg.reduce((a,x)=>a+x.km,0).toFixed(2)} km total. Heat intensity is relative to the longest saved segment.`;
  }
  function select(i){const x=seg.find(s=>s.i===i);if(!x)return;$('jhmDetails').innerHTML=`<b>Segment ${x.i}</b> · ${esc(x.from)} → ${esc(x.to)} · <b>${x.km.toFixed(2)} km</b><br><span style="opacity:.7">Relative intensity: ${(x.km/Math.max(...seg.map(s=>s.km))*100).toFixed(0)}%</span>`;window.dispatchEvent(new CustomEvent('mapx:journey-heatmap-select',{detail:{index:i}}));}
  $('jhmLoad')?.addEventListener('click',load);
  $('jhmReset')?.addEventListener('click',()=>{$('jhmChart').innerHTML='';$('jhmDetails').textContent='Heatmap reset.';$('jhmLegend').innerHTML='';$('jhmStatus').textContent='READY';$('jhmStatus').className='status';});
  $('jhmExport')?.addEventListener('click',()=>{if(!seg.length){load();if(!seg.length)return;}const max=Math.max(...seg.map(s=>s.km),0.001),out={app:'MapXplorer 3D',type:'journey-route-heatmap',createdAt:new Date().toISOString(),segments:seg.map(x=>({...x,intensityPercent:+(x.km/max*100).toFixed(2)})),note:'Relative visualization based on straight-line waypoint geometry; not live traffic or road heat data.'};const b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-route-heatmap.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);});
  window.addEventListener('mapx:timeline-updated',load);load();
})();


/* WORLD JOURNEY ARRIVAL EVENT TIMELINE */
(()=>{
  const $=id=>document.getElementById(id);
  const esc=x=>String(x??'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
  const hav=(a,b)=>{const R=6371e3,p=Math.PI/180,d1=(b.lat-a.lat)*p,d2=(b.lng-a.lng)*p,q=Math.sin(d1/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(d2/2)**2;return 2*R*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));};
  let pts=[];let events=[];
  function load(){
    try{pts=JSON.parse(localStorage.getItem('mapx-journey-timeline-v1')||'[]').filter(p=>Number.isFinite(Number(p.lat))&&Number.isFinite(Number(p.lng)));}catch{pts=[];}
    build();
  }
  function build(){
    const grid=$('jaeGrid'),timeline=$('jaeTimeline'); if(!grid||!timeline)return;
    if(pts.length<2){grid.innerHTML='';timeline.innerHTML='<div style="opacity:.7">At least two saved waypoints are required.</div>';$('jaeSummary').textContent='Save at least two journey waypoints first.';$('jaeStatus').textContent='NEED WAYPOINTS';return;}
    const speed=50;let total=0;events=[{type:'START',index:0,name:pts[0].name||'Waypoint 1',distanceKm:0,minutes:0}];
    for(let i=1;i<pts.length;i++){const km=hav(pts[i-1],pts[i])/1000;total+=km;events.push({type:i===pts.length-1?'ARRIVAL':'CHECKPOINT',index:i,name:pts[i].name||`Waypoint ${i+1}`,from:pts[i-1].name||`Waypoint ${i}`,distanceKm:total,segmentKm:km,minutes:total/speed*60});}
    const arrival=events[events.length-1];
    const card=(a,b)=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">${a}</small><div style="font-size:1.12rem;font-weight:700;margin-top:3px">${b}</div></div>`;
    grid.innerHTML=card('Events',events.length)+card('Checkpoints',Math.max(0,events.length-2))+card('Distance',total.toFixed(2)+' km')+card('Sim. arrival',(arrival.minutes/60).toFixed(2)+' h');
    timeline.innerHTML=events.map((e,i)=>{const final=e.type==='ARRIVAL',start=e.type==='START';return `<div style="display:grid;grid-template-columns:34px 1fr auto;gap:10px;align-items:center;padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:rgba(255,255,255,.025)"><div style="width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:${final?'#34d399':start?'#60a5fa':'#a78bfa'};color:#07111f;font-weight:800">${start?'▶':final?'✓':i}</div><div><b>${e.type}</b> · ${esc(e.name)}${e.from?`<div style="font-size:.78rem;opacity:.65">From ${esc(e.from)}</div>`:''}</div><div style="text-align:right"><b>${e.distanceKm.toFixed(2)} km</b><div style="font-size:.75rem;opacity:.65">${e.minutes.toFixed(1)} min</div></div></div>`}).join('');
    $('jaeStatus').textContent='TIMELINE READY';$('jaeStatus').className='status ok';$('jaeSummary').textContent=`${events.length} journey events generated from ${pts.length} saved waypoints. Timing uses a simulated 50 km/h speed.`;
  }
  function exportEvents(){if(!events.length){load();if(!events.length)return;}const out={app:'MapXplorer 3D',type:'arrival-event-timeline',createdAt:new Date().toISOString(),simulation:{speedKmh:50,source:'straight-line waypoint geometry'},events};const b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-arrival-event-timeline.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);}
  $('jaeLoad')?.addEventListener('click',load);$('jaeExport')?.addEventListener('click',exportEvents);$('jaeReset')?.addEventListener('click',()=>{events=[];$('jaeGrid').innerHTML='';$('jaeTimeline').innerHTML='';$('jaeSummary').textContent='Timeline reset.';$('jaeStatus').textContent='READY';$('jaeStatus').className='status';});window.addEventListener('mapx:timeline-updated',load);load();
})();


/* WORLD JOURNEY SNAPSHOT COMPARISON */
(()=>{
 const $=id=>document.getElementById(id); if(!$('jscCompare')) return;
 const KEY='mapx-journey-sessions-v1', R=6371000, rad=x=>x*Math.PI/180; let sessions=[], last=null;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function hav(a,b){const p1=rad(a.lat),p2=rad(b.lat),d1=rad(b.lat-a.lat),d2=rad(b.lng-a.lng),q=Math.sin(d1/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(d2/2)**2;return 2*R*Math.asin(Math.sqrt(q));}
 function read(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');sessions=Array.isArray(x)?x.filter(v=>v&&Array.isArray(v.waypoints)):[]}catch{sessions=[];} fill();}
 function fill(){const a=$('jscA'),b=$('jscB');const oldA=a.value,oldB=b.value;const opts=sessions.map((x,i)=>`<option value="${i}">${esc(x.name||'Snapshot '+(i+1))} · ${x.waypoints.length} waypoints</option>`).join('');a.innerHTML=opts;b.innerHTML=opts;if(oldA&&a.querySelector(`option[value="${oldA}"]`))a.value=oldA;if(oldB&&b.querySelector(`option[value="${oldB}"]`))b.value=oldB;if(sessions.length>1&&a.value===b.value)b.value='1';$('jscStatus').textContent=sessions.length>1?'READY':'NEED 2 SNAPSHOTS';$('jscStatus').className=sessions.length>1?'status ok':'status';}
 function metrics(x){const p=x.waypoints||[];let total=0,longest=0,shortest=Infinity;for(let i=1;i<p.length;i++){const km=hav(p[i-1],p[i])/1000;total+=km;longest=Math.max(longest,km);shortest=Math.min(shortest,km);}if(!isFinite(shortest))shortest=0;return {waypoints:p.length,segments:Math.max(0,p.length-1),distanceKm:total,avgKm:p.length>1?total/(p.length-1):0,longestKm:longest,shortestKm:shortest,timeMin:total/50*60};}
 function compare(){if(sessions.length<2){$('jscSummary').textContent='Save at least two journey snapshots first.';return;}let ia=Number($('jscA').value),ib=Number($('jscB').value);if(ia===ib){$('jscSummary').textContent='Choose two different snapshots.';return;}const A=metrics(sessions[ia]),B=metrics(sessions[ib]);last={a:{name:sessions[ia].name,metrics:A},b:{name:sessions[ib].name,metrics:B},generatedAt:new Date().toISOString(),simulation:'50 km/h over straight-line waypoint geometry'};const card=(l,v)=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">${l}</small><div style="font-size:1.05rem;font-weight:700;margin-top:3px">${v}</div></div>`;$('jscGrid').innerHTML=card('Snapshot A',esc(sessions[ia].name))+card('Snapshot B',esc(sessions[ib].name))+card('Distance Δ',Math.abs(A.distanceKm-B.distanceKm).toFixed(2)+' km')+card('Waypoint Δ',Math.abs(A.waypoints-B.waypoints))+card('Segment Δ',Math.abs(A.segments-B.segments))+card('Sim. time Δ',Math.abs(A.timeMin-B.timeMin).toFixed(1)+' min');const rows=[['Waypoints',A.waypoints,B.waypoints],['Segments',A.segments,B.segments],['Total distance',A.distanceKm.toFixed(2)+' km',B.distanceKm.toFixed(2)+' km'],['Average leg',A.avgKm.toFixed(2)+' km',B.avgKm.toFixed(2)+' km'],['Longest leg',A.longestKm.toFixed(2)+' km',B.longestKm.toFixed(2)+' km'],['Shortest leg',A.shortestKm.toFixed(2)+' km',B.shortestKm.toFixed(2)+' km'],['Simulated time',A.timeMin.toFixed(1)+' min',B.timeMin.toFixed(1)+' min']];$('jscTable').innerHTML='<table style="width:100%;border-collapse:collapse;min-width:480px"><thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">Metric</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">'+esc(sessions[ia].name)+'</th><th style="text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)">'+esc(sessions[ib].name)+'</th></tr></thead><tbody>'+rows.map(r=>'<tr><td style="padding:8px">'+r[0]+'</td><td style="padding:8px">'+r[1]+'</td><td style="padding:8px">'+r[2]+'</td></tr>').join('')+'</tbody></table>';$('jscSummary').textContent='Comparison generated locally from the two saved waypoint sets.';$('jscStatus').textContent='COMPARED';$('jscStatus').className='status ok';}
 function exportCmp(){if(!last){compare();if(!last)return;}const b=new Blob([JSON.stringify(last,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-journey-snapshot-comparison.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);$('jscStatus').textContent='EXPORTED';}
 $('jscCompare').onclick=compare;$('jscRefresh').onclick=read;$('jscExport').onclick=exportCmp;window.addEventListener('mapx:sessions-updated',read);read();
})();


/* WORLD JOURNEY REPAIR AUDIT INTEGRITY */
(()=>{
 const $=id=>document.getElementById(id); if(!$('jraiScan')) return;
 const KEY='mapx-route-repair-history-v1'; let report=[];
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function read(){try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x:[];}catch{return[];}}
 function verify(){const hist=read(); report=hist.map((h,i)=>{const before=Array.isArray(h.before)?h.before:null,after=Array.isArray(h.after)?h.after:null,c=h.changes||{};const issues=[];if(!before)issues.push('Missing before snapshot');if(!after)issues.push('Missing after snapshot');if(!h.savedAt)issues.push('Missing timestamp');if(before&&after){if(before.length<after.length && !(Number(c.namesAdded||0)>0))issues.push('After count increased without recorded additions');if(before.length>after.length && !((Number(c.invalidRemoved||0)+Number(c.duplicatesRemoved||0))>0))issues.push('After count decreased without recorded removals');if(Number(c.namesAdded||0)>after.length)issues.push('Name-add count exceeds after waypoint count');}return {checkpoint:i+1,savedAt:h.savedAt||'',before:before?before.length:0,after:after?after.length:0,removed:Number(c.invalidRemoved||0)+Number(c.duplicatesRemoved||0),added:Number(c.namesAdded||0),issues};});
 const valid=report.filter(x=>!x.issues.length).length,issues=report.reduce((n,x)=>n+x.issues.length,0);
 const card=(a,b)=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:rgba(255,255,255,.035)"><small style="opacity:.7">${a}</small><div style="font-size:1.12rem;font-weight:700;margin-top:3px">${b}</div></div>`;
 $('jraiGrid').innerHTML=card('Checkpoints',report.length)+card('Valid',valid)+card('With issues',report.length-valid)+card('Issues found',issues);
 $('jraiTable').innerHTML=report.length ? '<table style=\"width:100%;border-collapse:collapse;min-width:650px\"><thead><tr><th style=\"text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)\">Checkpoint</th><th style=\"text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)\">Before → After</th><th style=\"text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)\">Changes</th><th style=\"text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)\">Status</th><th style=\"text-align:left;padding:8px;border-bottom:1px solid rgba(255,255,255,.15)\">Details</th></tr></thead><tbody>' + report.map(x=>'<tr><td style=\"padding:8px\">#'+x.checkpoint+'</td><td style=\"padding:8px\">'+x.before+' → '+x.after+'</td><td style=\"padding:8px\">−'+x.removed+' / +'+x.added+'</td><td style=\"padding:8px;font-weight:700\">'+(x.issues.length?'⚠️ CHECK':'✓ VALID')+'</td><td style=\"padding:8px;opacity:.8\">'+(x.issues.length?esc(x.issues.join('; ')):'No consistency issues detected.')+'</td></tr>').join('') + '</tbody></table>' : '<div style=\"opacity:.7\">No Repair Vault checkpoints found.</div>';
 $('jraiStatus').textContent=issues?'CHECK REQUIRED':'AUDIT CLEAN';$('jraiStatus').className='status '+(issues?'':'ok');$('jraiSummary').textContent=report.length?`${valid} of ${report.length} checkpoint(s) passed the local consistency audit.`:'No checkpoints are available for verification.';
 }
 function exportReport(){verify();const out={app:'MapXplorer 3D',type:'repair-audit-integrity-report',generatedAt:new Date().toISOString(),report};const b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-repair-audit-integrity.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);}
 $('jraiScan').onclick=verify;$('jraiExport').onclick=exportReport;$('jraiReset').onclick=()=>{$('jraiGrid').innerHTML='';$('jraiTable').innerHTML='';$('jraiSummary').textContent='Run verification to inspect the Repair Vault.';$('jraiStatus').textContent='READY';$('jraiStatus').className='status';report=[];};window.addEventListener('mapx:timeline-updated',()=>{$('jraiStatus').textContent='READY';});verify();
})();

/* WORLD JOURNEY BACKUP RESTORE SAFETY CENTER */
(()=>{
 const $=id=>document.getElementById(id); if(!$('brgPreview')) return;
 const GROUPS=[
  {id:'journey',label:'Journey timeline',keys:['mapx-journey-timeline-v1']},
  {id:'sessions',label:'Saved sessions',keys:['mapx-journey-sessions-v1']},
  {id:'repairs',label:'Repair history',keys:['mapx-route-repair-history-v1']},
  {id:'snapshots',label:'Repair vault / checkpoints',keys:['mapx-repair-vault-v1','mapx-route-repair-vault-v1']}
 ];
 let backup=null, rollback=null;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function parseValue(v){if(typeof v!=='string')return v;try{return JSON.parse(v);}catch{return v;}}
 function keyCount(v){return Array.isArray(v)?v.length:(v&&typeof v==='object'?Object.keys(v).length:1);}
 function readFile(){const f=$('brgFile').files[0];if(!f){$('brgSummary').textContent='Choose a backup JSON file first.';return null;}const r=new FileReader();r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||o.app!=='MapXplorer 3D'||!o.storage||typeof o.storage!=='object')throw new Error('Invalid MapXplorer backup format');backup=o;render();$('brgStatus').textContent='PREVIEW READY';$('brgStatus').className='status ok';$('brgSummary').textContent=`Preview loaded from ${f.name}. Nothing has been restored yet.`;}catch(e){backup=null;$('brgStatus').textContent='INVALID';$('brgStatus').className='status';$('brgSummary').textContent='Backup could not be previewed: '+e.message;render();}};r.readAsText(f);return true;}
 function render(){const s=backup?.storage||{};const cards=[['Backup keys',Object.keys(s).length],['Journey points',keyCount(s['mapx-journey-timeline-v1'])],['Sessions',keyCount(s['mapx-journey-sessions-v1'])],['Repair entries',keyCount(s['mapx-route-repair-history-v1'])]];$('brgGrid').innerHTML=cards.map(([a,b])=>`<div style="padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:12px"><small style="opacity:.7">${a}</small><div style="font-size:1.12rem;font-weight:700">${b}</div></div>`).join('');$('brgGroups').innerHTML=GROUPS.map(g=>{const present=g.keys.some(k=>Object.prototype.hasOwnProperty.call(s,k));const n=g.keys.reduce((sum,k)=>sum+(present?keyCount(s[k]):0),0);return `<label style="display:flex;gap:9px;align-items:flex-start;padding:11px;border:1px solid rgba(255,255,255,.1);border-radius:12px;opacity:${present?1:.55}"><input type="checkbox" data-brg-group="${g.id}" ${present?'checked':'disabled'} style="margin-top:4px"><span><b>${g.label}</b><br><small>${present?n+' item(s) in backup':'Not present in backup'}</small></span></label>`;}).join('');}
 function createRollback(){const data={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('mapx-'))data[k]=parseValue(localStorage.getItem(k));}rollback={app:'MapXplorer 3D',type:'restore-rollback',createdAt:new Date().toISOString(),storage:data};const b=new Blob([JSON.stringify(rollback,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='mapxplorer-restore-rollback.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),500);$('brgStatus').textContent='ROLLBACK CREATED';$('brgStatus').className='status ok';$('brgSummary').textContent='A rollback backup of the current MapXplorer data was downloaded before any restore.';}
 function restore(){if(!backup){$('brgSummary').textContent='Preview a backup first.';return;}const selected=GROUPS.filter(g=>document.querySelector(`[data-brg-group="${g.id}"]`)?.checked);if(!selected.length){$('brgSummary').textContent='Select at least one data group.';return;}const allowed=new Set(selected.flatMap(g=>g.keys));let count=0;Object.entries(backup.storage).forEach(([k,v])=>{if(allowed.has(k)){localStorage.setItem(k,typeof v==='string'?v:JSON.stringify(v));count++;}});window.dispatchEvent(new Event('mapx:timeline-updated'));window.dispatchEvent(new Event('mapx:sessions-updated'));$('brgStatus').textContent='RESTORED';$('brgStatus').className='status ok';$('brgSummary').textContent=`Restored ${count} selected data group key(s). Reloading related panels from local storage.`;}
 $('brgPreview').onclick=readFile;$('brgRollback').onclick=createRollback;$('brgRestore').onclick=restore;$('brgReset').onclick=()=>{backup=null;$('brgFile').value='';$('brgGrid').innerHTML='';$('brgGroups').innerHTML='';$('brgSummary').textContent='Choose a backup JSON file and preview it before restoring anything.';$('brgStatus').textContent='READY';$('brgStatus').className='status';};render();
})();

/* MAPX V19 bridge: expose core Leaflet state for reliable UI integrations. */
try {
  window.mapxMap = map;
  window.mapxStandardLayer = mapLayer;
  window.mapxTerrainLayer = terrainLayer;
  window.mapxCurrentLayer = currentLayer;
  window.mapxSetCurrentLayer = function(layer){ currentLayer = layer; window.mapxCurrentLayer = layer; };
} catch (e) {}
