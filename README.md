This Nextjs v15 app uses Libauth v3 which disables Fast Refresh / HMR.

Run in dev mode with `pnpm run dev` and then visit `/libauth` the landing page where you can increment the counter:

<img width="602" alt="Screenshot 2025-06-06 at 18 21 18" src="https://github.com/user-attachments/assets/02800aa5-5202-447a-8fe5-289ad8f76b57" />

If you edit and save `app/libauth/page.tsx` you will notice the counter resets:

<img width="601" alt="Screenshot 2025-06-06 at 18 22 33" src="https://github.com/user-attachments/assets/61fa146b-0f2c-4a0d-8130-46f31829b673" />

And the console shows the following message:

<img width="866" alt="Screenshot 2025-06-06 at 18 04 21" src="https://github.com/user-attachments/assets/fe6051f9-32a1-4844-8414-8e4dfb582bb1" />
