import { ApiProperty } from "@nestjs/swagger";

export class CreateMembershipDto {
    @ApiProperty({ example: "Gold Membership" })
    name: string;
    
    @ApiProperty({ example: 149 })
    price: number; 
}
