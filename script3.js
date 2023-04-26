		const data = [111, 125, 55, 28, 67, 100, 44];

		const chart = document.querySelector("#chart");

		let max = Math.max.apply(null, data);

		for (let i = 0; i < data.length; i++) {
			let height = (data[i] / max) * 100;
			let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttributeNS(null, "x", i * 70 + 5);
			rect.setAttributeNS(null, "y", 120 - height);
			rect.setAttributeNS(null, "width", 50);
			rect.setAttributeNS(null, "height", height);
			chart.appendChild(rect);
		}