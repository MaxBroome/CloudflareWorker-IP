// Made with <3 by Max Broomfield - 2023
addEventListener('fetch', event => {
	const request = event.request;
	const method = request.method;
  
	if (method === 'GET') {
	  event.respondWith(handleRequest(request));
	} else {
	  event.respondWith(jsonError(`Method not allowed: ${method}`, 405));
	}
  });

  async function handleRequest(request) {
	return new Response(request.headers.get('x-real-ip') + '\n', {
	  status: 200,
	  headers: {
		'Content-Type': 'text/plain; charset=utf-8',
		'Cache-Control': 'no-cache, no-store, must-revalidate',
		'X-Content-Type-Options': 'nosniff',
	  }
	});
  }
  
  function jsonError(message, status = 400) {
	return new Response(JSON.stringify({ error: message }), {
	  status: status,
	  headers: {
		'Content-Type': 'application/json; charset=utf-8'
	  }
	});
  }
