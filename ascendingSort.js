/**
 * Used this to sort data that looked like "LN", where L is a letter and N is a number
 */

data = ["a12","a2","c32","a34","c3"]

data.sort((a,b) => {
	// if a less than b
	a.replace(/\d+/g,'') < a.replace(/\d+/g,'') 
	if( a.replace(/\d+/g,'') < b.replace(/\d+/g,'') ){
		return -1;
	}
	// if a greater than b
	if( a.replace(/\d+/g,'') > b.replace(/\d+/g,'') ){
		return 1;
    }
	// if a less than b
	a.replace(/\D+/g,'') < a.replace(/\D+/g,'') 
	if( Number(a.replace(/\D+/g,'')) < Number(b.replace(/\D+/g,'')) ){
		return -1;
	}
	// if a greater than b
	if( Number(a.replace(/\D+/g,'')) > Number(b.replace(/\D+/g,'')) ){
		return 1;
    }
});