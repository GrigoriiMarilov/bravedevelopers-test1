function func(s, a, b) {
	for(let i = s.length-1; i>=0; i--){
		if (s[i] == a || s[i] == b) {
			return i;
		}
	}
	return -1;
}


