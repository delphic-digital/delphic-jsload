;(function (DELPHIC, $LAB) {

$LAB.setGlobalDefaults({AlwaysPreserveOrder:true});

DELPHIC.jsload = function(f,c){
	var queue = [];
	
	if (f instanceof Array) {
		for (var i=0, len=f.length; i<len; i++) {
			queue.push(f[i]);
		}
	}else if (typeof f == "string") { 
		queue = DELPHIC.LABconfig.shortcuts[f];
	}
	for (var i=0, len=queue.length; i<len; i++) {
		if (DELPHIC.LABconfig.paths[queue[i]]){
			$LAB = $LAB.script(DELPHIC.LABconfig.paths[queue[i]]);
		}else{
			$LAB.script(queue[i]);
		}	
	}
	$LAB = $LAB.wait(c);
}

} (DELPHIC = window.DELPHIC || {}, $LAB));
