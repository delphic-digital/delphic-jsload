;(function (DELPHIC, $LAB) {

$LAB.setGlobalDefaults({AlwaysPreserveOrder:true});

DELPHICSITE.jsload = function(f,c){
	var queue = [];
	
	if (f instanceof Array) {
		for (var i=0, len=f.length; i<len; i++) {
			queue.push(f[i]);
		}
	}else if (typeof f == "string") { 
		queue = DELPHICSITE.LABconfig.shortcuts[f];
	}
	for (var i=0, len=queue.length; i<len; i++) {
		if (DELPHICSITE.LABconfig.paths[queue[i]]){
			$LAB = $LAB.script(DELPHICSITE.LABconfig.paths[queue[i]]);
		}else{
			$LAB.script(queue[i]);
		}	
	}
	$LAB = $LAB.wait(c);
}

} (DELPHIC = window.DELPHIC || {}, $LAB));
