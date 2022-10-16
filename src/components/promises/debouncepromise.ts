export default async (f :(...args :unknown[]) => unknown, interval :number) => {
	let timer = 0;
	return (...args :unknown[]) => {
		clearTimeout(timer);
		return new Promise((resolve) => {
			timer = setTimeout(
				() => resolve(
					f(...args)
				),
				interval,
			);
		});
	};
};
