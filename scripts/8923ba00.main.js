function onConnect(){connected=!0}function sendColor(){if(connected&&null!=color){console.log("sending "+color.toString());var a=new Paho.MQTT.Message(color.toString().replace("#",""));a.destinationName="benjamin-strip",client.send(a),color=null}}client=new Paho.MQTT.Client("ws://iot.eclipse.org/ws","id-"+(new Date).getTime());var connected=!1;client.connect({onSuccess:onConnect});var color=null,cw=Raphael.colorwheel($(".colorwheel_large"),500,180).color("#00F");cw.onchange(function(a){color=a}),setInterval(sendColor,100);