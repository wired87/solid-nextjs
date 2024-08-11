"use client"
import {AuthResponse, createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://bvvpjxnzhahifdphhqpr.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE
const supabase = createClient(supabaseUrl, supabaseKey);

// https://github.com/vercel/nextjs-subscription-payments



export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      let a:AuthResponse;

      // Create user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        res.status(error.status).json({ error: error.message });
        return;
      }

      // Optionally, send a confirmation email
      // await supabase.auth.sendMagicLinkEmail({ email, options: { redirectTo: 'your-confirmation-page' } });

      res.status(200).json({ message: "User created successfully.", data: data });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

import { Client } from '@botpress/client';

const client = new Client({
  authToken: 'YOUR_API_TOKEN',
  botId: 'your_bot_id',
  workspaceId: 'your_workspace_id',
  baseUrl: 'http://localhost:3000'
});


const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'}
};

export const createBot = async () => {
  return await fetch('https://api.botpress.cloud/v1/admin/bots', options);
}

