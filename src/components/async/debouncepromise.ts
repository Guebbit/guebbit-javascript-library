//TODO typescript & tests

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (f :any, interval :number) => {
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
