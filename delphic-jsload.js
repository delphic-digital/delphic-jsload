$LAB.setGlobalDefaults({AlwaysPreserveOrder:true});

function jsload(f,c){
	var queue = [];
	
	if (f instanceof Array) {
		for (var i=0, len=f.length; i<len; i++) {
			queue.push(f[i]);
		}
	}else if (typeof f == "string") { 
		queue = LABconfig.shortcuts[f];
	}
	for (var i=0, len=queue.length; i<len; i++) {
		if (LABconfig.paths[queue[i]]){
			$LAB = $LAB.script(LABconfig.paths[queue[i]]);
		}else{
			$LAB.script(queue[i]);
		}	
	}
	$LAB = $LAB.wait(c);
}
