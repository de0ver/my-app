import React from "react";

function getBrowser(info)
{
    if (info.includes("Firefox")) {
        return "Mozilla Firefox";
      } else if (info.includes("SamsungBrowser")) {
        return "Samsung Internet";
      } else if (info.includes("Opera") || info.includes("OPR")) {
        return "Opera";
      } else if (info.includes("Edge")) {
        return "Microsoft Edge (Legacy)";
      } else if (info.includes("Edg")) {
        return "Microsoft Edge (Chromium)";
      } else if (info.includes("Chrome")) {
        return "Google Chrome or Chromium";
      } else if (info.includes("Safari")) {
        return "Apple Safari";
      } else {
        return "unknown";
      }
}

function getLocation(position)
{
    return document.getElementById('map').src = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude}%2C${position.coords.latitude}&amp;layer=mapnik`;
}

function getVideoCardInfo() {
    var canvas = document.createElement('canvas');
    var gl;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }

    if (gl) {
        return gl.getParameter(gl.RENDERER);
    }

    return 'NO INFO.';
}

function getOS()
{
    return navigator.oscpu;
}

export default function ClientInfo()
{
    return <div>Your browser: {getBrowser(navigator.userAgent)};<br/>
    Location: <br/><iframe id='map' src={navigator.geolocation.getCurrentPosition(getLocation)}></iframe><br/>
    GPU: {getVideoCardInfo()};<br/>
    OS: {getOS()};</div>
    //<iframe id='map' src={navigator.geolocation.getCurrentPosition(position => {return document.getElementById('map').src = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude}%2C${position.coords.latitude}&amp;layer=mapnik`;})}></iframe>
}