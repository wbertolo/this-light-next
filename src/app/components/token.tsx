'use client';
import { useEffect } from "react";

export async function getToken(code:string) {
	// stored in the previous step
	let codeVerifier = localStorage.getItem('code_verifier');
	const query = await fetch(
	'https://accounts.spotify.com/api/token', 
	{
		method: 'POST',
		headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		},
		body: `client_id=bd4fb7b003174f5e9fcd2eebb592b3bd&grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/playlists-submission&code_verifier=${codeVerifier}`
	}
	);

	const response = await query.json();

	storeTokens(response.access_token, response.refresh_token);
}


export async function getRefreshToken() {
	// refresh token that has been previously stored
	const refreshToken = localStorage.getItem('refresh_token');
	const clientId = 'bd4fb7b003174f5e9fcd2eebb592b3bd';
	
	const query = await fetch(
		"https://accounts.spotify.com/api/token",
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}`,
	   }
	);
	 
	const response = await query.json();

	storeTokens(response.access_token, response.refresh_token);

	// localStorage.setItem('access_token', response.access_token);
	// localStorage.setItem('refresh_token', response.refresh_token);
}


function storeTokens(access_token:string, refresh_token:string) {
	localStorage.setItem('access_token', access_token);
	localStorage.setItem('refresh_token', refresh_token);	
}

export function Token() {
	if (typeof window !== "undefined") {
		const urlParams = new URLSearchParams(window.location.search);
		let code:any = urlParams.get('code');
		const token = localStorage.getItem('access_token');
		// console.log('token is' + token);
		if (token === 'undefined' || token === null) {
			console.log('token is undefined');
			getToken(code);
		} else {
			console.log('token is else');
			getRefreshToken();
		}
	}
}
