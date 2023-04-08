fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then((data) => data.json())
    .then((response) => {
        var list = document.getElementById('list');
        if (response && response.length !== 0) {
            for (var i = 0; i < response.length; i++) {
                var selectedCoin = response[i];
                //HTML ELEMENTS
                const coinName = document.createElement('dt');
                const percent = document.createElement('font');
                const price = document.createElement('dd');
                const icon = document.createElement('img');
                //TITLE
                coinName.innerText = selectedCoin.name;
                var percentChange = parseFloat(selectedCoin.price_change_percentage_24h).toFixed(2);
                var percentColor = percentChange[0] != '-' ? 'green' : 'red';
                percent.setAttribute('color', percentColor);
                percent.innerText = ' ' + percentChange + '%';
                icon.setAttribute('src', selectedCoin.image);
                icon.setAttribute('class', 'list-icon');
                coinName.appendChild(percent);
                list.appendChild(icon);
                //PRICE
                price.innerText = ' $' + selectedCoin.current_price;
                //ADDING ELEMENTS TO TEMPLATE
                list.appendChild(coinName);
                list.appendChild(price);
            }
        } else {
            var errorMsg = document.createElement('dt');
            errorMsg.innerText = 'Error loading data.';
            errorMsg.setAttribute('class', 'error');
            list.appendChild(errorMsg);
        }
    });
