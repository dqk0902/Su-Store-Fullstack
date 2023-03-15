using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class ConfigOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_order_users_user_id",
                table: "order");

            migrationBuilder.DropPrimaryKey(
                name: "pk_order",
                table: "order");

            migrationBuilder.RenameTable(
                name: "order",
                newName: "orders");

            migrationBuilder.RenameIndex(
                name: "ix_order_user_id",
                table: "orders",
                newName: "ix_orders_user_id");

            migrationBuilder.AddColumn<int>(
                name: "order_id",
                table: "products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "user_id",
                table: "orders",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "status",
                table: "orders",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "total_price",
                table: "orders",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddPrimaryKey(
                name: "pk_orders",
                table: "orders",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_orders_users_user_id",
                table: "orders",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_orders_users_user_id",
                table: "orders");

            migrationBuilder.DropPrimaryKey(
                name: "pk_orders",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "order_id",
                table: "products");

            migrationBuilder.DropColumn(
                name: "status",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "total_price",
                table: "orders");

            migrationBuilder.RenameTable(
                name: "orders",
                newName: "order");

            migrationBuilder.RenameIndex(
                name: "ix_orders_user_id",
                table: "order",
                newName: "ix_order_user_id");

            migrationBuilder.AlterColumn<int>(
                name: "user_id",
                table: "order",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddPrimaryKey(
                name: "pk_order",
                table: "order",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_order_users_user_id",
                table: "order",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id");
        }
    }
}
