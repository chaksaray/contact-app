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
