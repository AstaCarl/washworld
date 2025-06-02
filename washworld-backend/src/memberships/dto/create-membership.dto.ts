import { ApiProperty } from "@nestjs/swagger";

// DTO for creating a membership
export class CreateMembershipDto {
    @ApiProperty({ example: "Gold Membership" })
    name: string;
    
    @ApiProperty({ example: 149 })
    price: number; 
}
