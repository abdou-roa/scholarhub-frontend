import { NextResponse, NextRequest } from "next/server";

const loggedInRoutes = ["/dashboard"];
const loggedOutRoutes = ["/auth/login", "/auth/register"]

export default async function AuthMiddleware(
    req: NextRequest
): Promise<NextResponse> {
 if(
    !loggedInRoutes.some((path)=>
        req.nextUrl.pathname.startsWith(path)) &&
    !loggedOutRoutes.some((path)=> req.nextUrl.pathname.startsWith(path))
 )
 return NextResponse.next();
 else{
    let token: string | null = localStorage.getItem("auth-token")
    if(!token)
        return NextResponse.redirect("http://localhost:3000/auth/login")
    else
        return NextResponse.redirect("http://localhost:3000/dashboard");
 }   
 return NextResponse.next()
}