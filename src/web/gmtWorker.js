importScripts('gmt-run.js');
// import Module from './gmt-run'
var wasmCluster = Module.cwrap("myFunction", "string", ["number", "number", "string", "string"]);

function cppGmt(a, b, c) {
    // var input_array = new Int32Array(tilePositions);
    
    // var len = input_array.length;
    // var bytes_per_element = input_array.BYTES_PER_ELEMENT;
    // var input_ptr = Module._malloc(2 * len * bytes_per_element);
    // Module.HEAP32.set(input_array, input_ptr / bytes_per_element);

    // wasmCluster(input_ptr, rows, cols);

    // var ret = new Int32Array(Module.HEAP32.buffer, input_ptr, len);

    // newTilePositions = new Array();
    // for(var i = 0; i < ret.length; ++i) {
    //     newTilePositions.push(ret[i]);
    // }
    
    // Module._free(input_ptr);
	console.log("cppGmt");
	console.log(wasmCluster(1,0,"lgraph","rgraph"));

}

Module.onRuntimeInitialized = function() {
	console.log("ready");
	postMessage({
		cmd: 'ready'
	});
}

addEventListener('message', function (e) {
	var data = e.data;
    switch (data.cmd) {
        case 'cluster':
	        postMessage({
            	cmd: 'cluster return'
            });
			cppGmt(1,2,3);
            break;
        default:
            break;
    } 
});