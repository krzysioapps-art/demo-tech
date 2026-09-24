"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Markets","markets"],["Systems","systems"],["Builder","builder"]];
export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#home" aria-label="NOVA home">NOVA</a>
    <nav className={`site-nav ${open?"is-open":""}`} aria-label="Primary">
      {links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="header-contact" href="#contact" onClick={()=>setOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
    </nav>
    <div className="header-status"><span className="live-dot" aria-hidden="true"/> LIVE</div>
    <button className="menu-button" type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </div></header>;
}
