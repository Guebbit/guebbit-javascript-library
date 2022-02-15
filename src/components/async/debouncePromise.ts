//TODO typescript & tests

export default (f :any, interval :number) => {
	let timer :any = undefined;
	return (...args :any) => {
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
