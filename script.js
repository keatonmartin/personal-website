'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const listener = new Listener();

	listener.decode = function ()
	{
		const email = document.getElementById('text-interaction').firstChild;

		email.nodeValue = email.nodeValue
			.replace('dont', '')
			.replace(' scrape', 'keatonsphone')
			.replace(' me', '1@gmail')
			.replaceAll(' ', '.')
      .replace('please', 'com');
	}

	listener.on();
});


// Listener

function Listener ()
{
}

Listener.prototype.decode = null;

Listener.prototype.on = function ()
{
	this.listener = this.__onInteraction.bind(this);

	document.addEventListener('mouseenter', this.listener, true);
	document.addEventListener('focus', this.listener, true);
	document.addEventListener('touchstart', this.listener, true);

	setTimeout(() => {
		if (this.listener) {
			this.__onInteraction();
		}
	}, 2000);
}

Listener.prototype.off = function ()
{
	document.removeEventListener('mouseenter', this.listener, true);
	document.removeEventListener('focus', this.listener, true);
	document.removeEventListener('touchstart', this.listener, true);

	delete this.listener;
}

Listener.prototype.__onInteraction = function ()
{
	this.off();
	this.decode();
}