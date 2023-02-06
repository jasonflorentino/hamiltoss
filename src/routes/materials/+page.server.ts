import materialList from '$lib/server/materialList';

export const load = () => {
	return {
		items: materialList,
	};
};
