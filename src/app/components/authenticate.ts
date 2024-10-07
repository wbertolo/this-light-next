'use client';
import { redirect } from 'next/navigation';

export async function authenticate() {

	if (typeof localStorage !== "undefined") {
		const token = localStorage.getItem('access_token');
		
		if (token === 'undefined' || token === null) {
			console.log('no token');
	
			const generateRandomString = (length:any) => {
				const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				const values = crypto.getRandomValues(new Uint8Array(length));
				return values.reduce((acc, x) => acc + possible[x % possible.length], "");
			}
		
			const codeVerifier  = generateRandomString(64);
	
			const sha256 = async (plain:any) => {
				const encoder = new TextEncoder()
				const data = encoder.encode(plain)
				return crypto.subtle.digest('SHA-256', data)
			}
		
			const base64encode = (input:any) => {
				// return btoa(String.fromCharCode(...new Uint8Array(input)))
				// 	.replace(/=/g, '')
				// 	.replace(/\+/g, '-')
				// 	.replace(/\//g, '_');
			}
			
			
			const hashed = await sha256(codeVerifier);
			const codeChallenge = base64encode(hashed);
	
	
			const clientId = 'bd4fb7b003174f5e9fcd2eebb592b3bd';
			const redirectUri = 'http://localhost:3000/playlists-submission';
	
			const scope = 'user-read-private user-read-email';
			const authUrl = new URL("https://accounts.spotify.com/authorize");
	
			// generated in the previous step
			if (typeof localStorage !== "undefined") {
				localStorage.setItem('code_verifier', codeVerifier);
			}
	
			const params =  {
				response_type: 'code',
				client_id: clientId,
				scope,
				code_challenge_method: 'S256',
				code_challenge: codeChallenge,
				redirect_uri: redirectUri,
			}
	
			if (typeof window !== "undefined") {
				// authUrl.search = new URLSearchParams(params).toString();
				// window.location.href = authUrl.toString();
			}
	
		} else {
			console.log('red');
			redirect('/playlists-submission/');
		}
	}
}
