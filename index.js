let res = [];
function getPath(ext, path, actualpath) {
	if(!path) {
		res.push(ext);
	}
	path = path.split('.');
	let property = path.shift(); 
	if (Array.isArray(ext)) {
		Object.keys(ext).forEach((k) => {
			if (ext[k][property]) {
				getPath(ext[k][property], path.join('.'), actualpath + '[' + k.toString() + ']' +'.'+ property.toString());
			}
		});
		return;
	} 
	if(ext[property]) {
		getPath(ext[property], path.join('.'), actualpath + '.' + property.toString());
	}
}

function getValue(ext,  path) {
        getPath(ext, path, '');
        return res;
}

module.exports.getPathValue = getValue;