export const transformPeople = (people, chunk = 4) => {
	let i,
		j = people.length,
		newArray = [];

	for (i = 0; i < j; i += chunk) {
		newArray.push(people.slice(i, i + chunk));
	}
	return newArray;
};

export const transformSocialLink = (socialNetworks) => {
	const transformedSocialLink = [];

	for (const key in socialNetworks) {
		const socialObjec = {
			id: key,
			value: socialNetworks[key],
		};

		transformedSocialLink.push(socialObjec);
	}
	return transformedSocialLink;
};

export const extractUniqueValueArray = (items) => {
	const newArr = [];

	for (const value of items) {
		if (newArr.indexOf(value) === -1) {
			newArr.push(value);
		}
	}

	return newArr;
};

// stackoverflow https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export const isValidURL = (str) => {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i',
	); // fragment locator
	return !!pattern.test(str);
};
