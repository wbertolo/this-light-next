'use client';
import { useEffect } from "react";
import { Token } from "../components/token";

const user = async (token:any) => {
    console.log(token);
	try {
		const res = await fetch("https://api.spotify.com/v1/me", {
			method: "GET", headers: { Authorization: `Bearer ${token}` }
		});
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}



export default async function UserInfo() {

	useEffect(() => {
		Token();
	}, []);
	
	if (typeof window !== "undefined") {
		const token = localStorage.getItem('access_token');
		const me = await user(token);
		const displayName = me.display_name;
		return (
		<>
			<div dangerouslySetInnerHTML={{ __html: `My name is ${displayName}` }}></div>
		</>
		);
	}

}