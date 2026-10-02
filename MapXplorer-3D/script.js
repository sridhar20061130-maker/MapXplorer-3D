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
{name:"The Residency Towers Coimbatore",type:"hotel",lat:11.0177,lng:76.9731,desc:"Hotel · Coimbatore",rating:"LIVE",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"}
];
function fallbackSearch(q){const terms=q.toLowerCase().split(/\s+/).filter(Boolean);return fallbackRealPlaces.filter(p=>terms.every(t=>(p.name+" "+p.type+" "+p.desc).toLowerCase().includes(t))).slice(0,6)}
function showSearchResults(data,box){box.innerHTML="";data.forEach(item=>{const d=document.createElement("div");d.className="live-result";d.innerHTML=`🌐 <b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.display_name||item.desc||"Real place")}</small>`;d.onclick=()=>{clearLiveSearchMarkers();addLivePlace(item);$("search").value=item.name;box.style.display="none"};box.appendChild(d)});box.style.display=data.length?"block":"none"}

const map=L.map("map",{zoomControl:false,preferCanvas:true}).setView([11.0168,76.9558],13);
const mapLayer=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
const terrainLayer=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png");
let currentLayer=mapLayer,markers=[],activeType="all",activePlace=places[0],saved=new Set(),routeLines=[],measurePoints=[],measureMarkers=[];
let livePlaces=[],liveMarkers=[];
const $=id=>document.getElementById(id);
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),1900)}
function icon(type){return L.divIcon({className:"",html:`<div class="custom-pin" style="width:42px;height:42px;background:linear-gradient(135deg,#8a32ff,#208eff)"><span>${emoji[type]||"◆"}</span></div>`,iconSize:[42,42],iconAnchor:[21,42]})}
function render(type=activeType){activeType=type;markers.forEach(m=>map.removeLayer(m));markers=[];places.filter(p=>type==="all"||p.type===type).forEach(p=>{const m=L.marker([p.lat,p.lng],{icon:icon(p.type)}).addTo(map);m.bindTooltip(`<b>${p.name}</b><br>${p.desc}`,{direction:"top",offset:[0,-30]});m.on("click",()=>selectPlace(p));markers.push(m)});addCharacters();renderPopular()}
function addCharacters(){const layer=$("characterLayer");layer.innerHTML="";if($("charToggle").checked===false)return;const chosen=places.filter(p=>activeType==="all"||p.type===activeType).slice(0,4);const colors=["char-blue","char-pink","char-green","char-blue"];chosen.forEach((p,i)=>{const pt=map.latLngToContainerPoint([p.lat,p.lng]);const el=document.createElement("div");el.className=`map-character ${colors[i]}`;el.style.left=(pt.x-38)+"px";el.style.top=(pt.y-105)+"px";el.style.animationDelay=(-i*.55)+"s";el.innerHTML=`<div class="hair"></div><div class="head"><i class="eye e1"></i><i class="eye e2"></i><i class="smile"></i></div><div class="arm a1"></div><div class="arm a2"></div><div class="body"></div><div class="badge">${emoji[p.type]}</div><div class="label">${p.name}</div>`;el.onclick=()=>selectPlace(p);layer.appendChild(el)})}

function renderCityFx(){
  const layer=$("cityFx"); if(!layer)return;
  layer.innerHTML="";
  if(!$('mapWrap').classList.contains('hyper3d') && !$('mapWrap').classList.contains('depth-mode')) return;
  const chosen=places.filter(p=>activeType==='all'||p.type===activeType).slice(0,7);
  chosen.forEach((p,i)=>{
    const pt=map.latLngToContainerPoint([p.lat,p.lng]);
    const b=document.createElement('div'); b.className='city-building';
    const h=32+(i*13)%62, w=18+(i*9)%30;
    b.style.setProperty('--x',pt.x+'px'); b.style.setProperty('--y',pt.y+'px');
    b.style.setProperty('--h',h+'px'); b.style.setProperty('--w',w+'px');
    b.style.animationDelay=(-i*.3)+'s'; layer.appendChild(b);
  });
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
function refresh(){addCharacters();renderCityFx();$("zoomReadout").textContent="Z"+map.getZoom()}
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
map.on("move zoom",refresh);map.on("zoomend",()=>$("zoomReadout").textContent="Z"+map.getZoom());

document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.type);pulse($("popularPanel"))});
function changeZoom(delta){const next=Math.max(map.getMinZoom(),Math.min(map.getMaxZoom(),map.getZoom()+delta));map.setZoom(next,{animate:true});toast(`Map zoom: ${next}`)}
["zoomIn","zoomOut"].forEach((id,i)=>{const el=$(id);el.addEventListener("pointerdown",e=>{e.preventDefault();e.stopPropagation();changeZoom(i===0?1:-1)});el.addEventListener("click",e=>{e.preventDefault();e.stopPropagation()})});
$("locateMap").onclick=()=>{if(!navigator.geolocation){toast("Geolocation is not available");return}navigator.geolocation.getCurrentPosition(p=>{map.flyTo([p.coords.latitude,p.coords.longitude],16,{duration:1});L.circleMarker([p.coords.latitude,p.coords.longitude],{radius:9,color:"#a348ff",fillColor:"#3aa9ff",fillOpacity:.9}).addTo(map);toast("Your location is centered")},()=>toast("Location permission was not granted"))};
$("tiltBtn").onclick=()=>{const w=$("mapWrap");w.classList.toggle("depth-mode");w.classList.toggle("depth");refresh();toast(w.classList.contains("depth-mode")?"Depth camera ON":"Depth camera OFF")};$("threeD").onclick=()=>{$("mapWrap").classList.toggle("hyper3d");renderCityFx();refresh();toast($("mapWrap").classList.contains("hyper3d")?"Hyper 3D ON — city depth loaded":"Hyper 3D OFF")};$("mapMode").onclick=()=>switchLayer(mapLayer,"Map");$("terrainMode").onclick=()=>switchLayer(terrainLayer,"Terrain");
$("closeCard").onclick=()=>$("selectedCard").style.display="none";$("saveDetail").onclick=()=>{saved.has(activePlace.name)?saved.delete(activePlace.name):saved.add(activePlace.name);updateSaveButton();renderSaved();toast(saved.has(activePlace.name)?"Place saved":"Place removed")};$("details").onclick=()=>{pulse($("selectedCard"));toast(`${activePlace.name} · ${activePlace.desc} · ${activePlace.rating}`)};
$("routeBtn").onclick=()=>{$("routePanel").scrollIntoView({behavior:"smooth",block:"center"});pulse($("routePanel"))};$("getDirections").onclick=drawRoute;$("clearRoute").onclick=()=>clearRoute();$("measure").onclick=measureMode;
$("addPlace").onclick=()=>{toast("Click the map to place a custom marker");map.once("click",e=>{const m=L.marker(e.latlng,{icon:icon("all")}).addTo(map);m.bindPopup("<b>Custom MapX Place</b><br>Added interactively.").openPopup();toast("Custom place added")})};$("share").onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast("Map link copied")}catch{toast("Share link: copy the page URL from your browser")}};
$("search").oninput=()=>{const q=$("search").value.trim().toLowerCase(),box=$("results");box.innerHTML="";if(!q){box.style.display="none";return}places.filter(p=>`${p.name} ${p.type}`.toLowerCase().includes(q)).slice(0,6).forEach(p=>{const d=document.createElement("div");d.textContent=`${emoji[p.type]||"◆"} ${p.name} — ${p.desc}`;d.onclick=()=>{selectPlace(p);$("search").value=p.name;box.style.display="none"};box.appendChild(d)});const live=document.createElement("div");live.className="live-result search-live-trigger";live.textContent="🌐 Search real places";live.onclick=()=>searchRealPlaces($("search").value.trim());box.appendChild(live);box.style.display="block"};$("searchBtn").onclick=()=>{const raw=$("search").value.trim(),q=raw.toLowerCase(),p=places.find(x=>`${x.name} ${x.type}`.toLowerCase().includes(q));p?selectPlace(p):searchRealPlaces(raw)}; $("search").addEventListener("keydown",e=>{if(e.key==="Enter"){const raw=e.currentTarget.value.trim();if(raw)searchRealPlaces(raw)}});
$("sendAI").onclick=sendAI;$("aiInput").onkeydown=e=>{if(e.key==="Enter")sendAI()};document.querySelectorAll(".quick button").forEach(b=>b.onclick=()=>{$("aiInput").value=b.textContent;sendAI()});$("aiNav").onclick=()=>{$("aiBox").scrollIntoView({behavior:"smooth",block:"center"});pulse($("aiBox"))};$("closeAI").onclick=()=>$("aiBox").classList.toggle("minimized");
$("menuBtn").onclick=()=>$("sidebar").classList.toggle("open");$("theme").onclick=()=>{document.body.classList.toggle("light-mode");toast(document.body.classList.contains("light-mode")?"Light theme ON":"Dark theme ON")};$("bell").onclick=()=>toast("MapX: 3 new exploration notifications");$("profileBtn").onclick=()=>toast("Profile: Sridhar S");$("premiumBtn").onclick=activate3D;$("galleryBtn").onclick=activate3D;
$("viewAll").onclick=fitAllPlaces;$("clearRecent").onclick=()=>{document.querySelectorAll("#recentPanel p").forEach(x=>x.remove());toast("Recent searches cleared")};$("clearSaved").onclick=()=>{saved.clear();renderSaved();updateSaveButton();toast("Saved places cleared")};
document.querySelectorAll(".transport button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".transport button").forEach(x=>x.classList.remove("active"));b.classList.add("active");toast(`Travel mode: ${b.textContent}`)});
document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");const n=btn.dataset.nav;const targets={categories:"categories",saved:"savedPanel",routes:"routePanel",traffic:"trafficPanel",weather:"weather",gallery:"galleryPanel",settings:"settingsPanel",ai:"aiBox"};if(n==="explore"){$("mapWrap").scrollIntoView({behavior:"smooth",block:"center"})}else if(n==="nearby"){fitAllPlaces();toast("Nearby scan expanded")}else if(targets[n]){$(targets[n]).scrollIntoView({behavior:"smooth",block:"center"});pulse($(targets[n]))}if(innerWidth<900)$('sidebar').classList.remove("open")});
$("particlesToggle").onchange=()=>document.body.classList.toggle("hide-particles",!$("particlesToggle").checked);$("charToggle").onchange=refresh;$("motionToggle").onchange=()=>{document.body.classList.toggle("low-motion",$("motionToggle").checked);if(!$('motionToggle').checked)requestAnimationFrame(updateFps);toast($("motionToggle").checked?"Low motion enabled":"Full motion enabled")};
function pulse(el){if(!el)return;el.classList.remove("pulse");void el.offsetWidth;el.classList.add("pulse")}
for(let i=0;i<65;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.animationDuration=7+Math.random()*11+"s";p.style.animationDelay=-Math.random()*14+"s";p.style.opacity=.2+Math.random()*.7;$("particles").appendChild(p)}
window.addEventListener("resize",refresh);map.on("move zoom",renderCityFx);renderCityFx();requestAnimationFrame(updateFps);setTimeout(()=>toast("MapX AI + 3D explorer core online · Live place search ready"),900);
